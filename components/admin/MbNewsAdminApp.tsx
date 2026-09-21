"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import type { MbNewsBlock, MbNewsBlockType, MbNewsEdition, MbNewsStatus } from "@/types/mb-news";

const DEFAULT_TOKEN = "mbfinance2026";
const TOKEN_STORAGE_KEY = "mb_news_admin_token";

const statusOptions: Array<{ value: MbNewsStatus; label: string }> = [
  { value: "draft", label: "Rascunho" },
  { value: "scheduled", label: "Agendada" },
  { value: "published", label: "Publicada" },
];

const blockTypeOptions: Array<{ value: MbNewsBlockType; label: string }> = [
  { value: "text", label: "Texto" },
  { value: "highlight", label: "Destaque" },
  { value: "ranking", label: "Ranking" },
  { value: "cta", label: "Chamada" },
];

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 90);
}

function createEmptyBlock(type: MbNewsBlockType = "text"): MbNewsBlock {
  return {
    id: createId(),
    type,
    eyebrow: "",
    title: "",
    body: "",
    image: "",
    ctaLabel: "",
    ctaUrl: "",
  };
}

function createEmptyEdition(): MbNewsEdition {
  const month = new Date().toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return {
    id: createId(),
    title: "",
    slug: "",
    month,
    editionNumber: "",
    status: "draft",
    publishDate: new Date().toISOString().slice(0, 10),
    heroTitle: "",
    heroSubtitle: "",
    editorialTitle: "",
    editorialBody: "",
    coverImage: "",
    blocks: [createEmptyBlock("highlight")],
    updatedAt: new Date().toISOString(),
  };
}

function statusLabel(status: MbNewsStatus) {
  return statusOptions.find((option) => option.value === status)?.label || status;
}

function formatDate(iso: string) {
  if (!iso) return "Sem data";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function MbNewsAdminApp() {
  const [editions, setEditions] = useState<MbNewsEdition[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draft, setDraft] = useState<MbNewsEdition | null>(null);
  const [token, setToken] = useState(DEFAULT_TOKEN);
  const [status, setStatus] = useState("Carregando edicoes...");
  const [saving, setSaving] = useState(false);

  const selectedEdition = useMemo(
    () => editions.find((edition) => edition.id === selectedId) || null,
    [editions, selectedId]
  );

  const loadEditions = useCallback(async (nextToken = token) => {
    setStatus("Carregando edicoes...");
    const response = await fetch("/api/mb-news/editions", {
      cache: "no-store",
      headers: { "x-admin-token": nextToken },
    });

    if (!response.ok) {
      const empty = createEmptyEdition();
      setSelectedId(empty.id);
      setDraft(empty);
      setStatus("Informe o token correto para carregar edicoes salvas.");
      return;
    }

    const data = await response.json();
    const nextEditions = Array.isArray(data.editions) ? data.editions : [];
    setEditions(nextEditions);

    if (nextEditions.length) {
      setSelectedId((current) => current || nextEditions[0].id);
      setDraft((current) => current || nextEditions[0]);
    } else {
      const empty = createEmptyEdition();
      setSelectedId(empty.id);
      setDraft(empty);
    }

    setStatus(`${nextEditions.length} edicao(oes) carregada(s)`);
  }, [token]);

  useEffect(() => {
    const storedToken = window.localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storedToken) {
      setToken(storedToken);
      void loadEditions(storedToken);
      return;
    }
    void loadEditions(DEFAULT_TOKEN);
  }, [loadEditions]);

  function selectEdition(edition: MbNewsEdition) {
    setSelectedId(edition.id);
    setDraft(edition);
    setStatus(`Editando ${edition.title || "edicao sem titulo"}`);
  }

  function handleNewEdition() {
    const empty = createEmptyEdition();
    setSelectedId(empty.id);
    setDraft(empty);
    setStatus("Nova edicao criada como rascunho.");
  }

  function updateDraft<K extends keyof MbNewsEdition>(field: K, value: MbNewsEdition[K]) {
    if (!draft) return;
    const next = { ...draft, [field]: value };
    if (field === "title") {
      next.slug = slugify(String(value));
      next.heroTitle = next.heroTitle || String(value);
    }
    setDraft(next);
  }

  function updateBlock<K extends keyof MbNewsBlock>(blockId: string, field: K, value: MbNewsBlock[K]) {
    if (!draft) return;
    setDraft({
      ...draft,
      blocks: draft.blocks.map((block) =>
        block.id === blockId ? { ...block, [field]: value } : block
      ),
    });
  }

  function addBlock(type: MbNewsBlockType) {
    if (!draft) return;
    setDraft({ ...draft, blocks: [...draft.blocks, createEmptyBlock(type)] });
  }

  function removeBlock(blockId: string) {
    if (!draft) return;
    setDraft({ ...draft, blocks: draft.blocks.filter((block) => block.id !== blockId) });
  }

  async function saveEditions(nextEditions: MbNewsEdition[]) {
    setSaving(true);
    setStatus("Salvando edicao...");

    const response = await fetch("/api/mb-news/editions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": token,
      },
      body: JSON.stringify({ editions: nextEditions }),
    });

    if (!response.ok) {
      setSaving(false);
      setStatus("Falha ao salvar. Verifique o token do painel.");
      return;
    }

    window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
    setEditions(nextEditions);
    setSaving(false);
    setStatus("Edicao salva com sucesso.");
  }

  async function handleSave(event: FormEvent) {
    event.preventDefault();
    if (!draft) return;

    const normalized: MbNewsEdition = {
      ...draft,
      title: draft.title.trim(),
      slug: slugify(draft.slug || draft.title),
      updatedAt: new Date().toISOString(),
    };

    const exists = editions.some((edition) => edition.id === normalized.id);
    const nextEditions = exists
      ? editions.map((edition) => (edition.id === normalized.id ? normalized : edition))
      : [normalized, ...editions];

    setDraft(normalized);
    setSelectedId(normalized.id);
    await saveEditions(nextEditions);
  }

  async function handleDelete() {
    if (!draft) return;
    if (!editions.some((edition) => edition.id === draft.id)) {
      setDraft(createEmptyEdition());
      return;
    }

    const confirmed = window.confirm(`Excluir "${draft.title || "edicao sem titulo"}"?`);
    if (!confirmed) return;

    const nextEditions = editions.filter((edition) => edition.id !== draft.id);
    const fallback = nextEditions[0] || createEmptyEdition();
    setDraft(fallback);
    setSelectedId(fallback.id);
    await saveEditions(nextEditions);
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-[#003956] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
              MB News Admin
            </p>
            <h1 className="mt-1 text-2xl font-black">Painel editorial da MB News</h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={token}
              onChange={(event) => setToken(event.target.value)}
              className="min-h-11 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-sky-300 sm:w-56"
              placeholder="Token do painel"
              aria-label="Token do painel"
            />
            <button
              type="button"
              onClick={() => void loadEditions()}
              className="min-h-11 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Recarregar
            </button>
            <a
              href="/"
              target="_blank"
              className="min-h-11 rounded-lg border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Ver MB News
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
                Edicoes
              </p>
              <p className="mt-1 text-sm text-slate-500">{status}</p>
            </div>
            <button
              type="button"
              onClick={handleNewEdition}
              className="min-h-11 rounded-xl bg-[#003956] px-4 py-2 text-sm font-bold text-white transition hover:bg-sky-600"
            >
              Nova
            </button>
          </div>

          <div className="space-y-2">
            {editions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 p-5 text-sm leading-6 text-slate-500">
                Nenhuma edicao salva ainda. Crie o primeiro rascunho no formulario ao lado.
              </div>
            ) : (
              editions.map((edition) => (
                <button
                  key={edition.id}
                  type="button"
                  onClick={() => selectEdition(edition)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                    selectedId === edition.id
                      ? "border-sky-500 bg-sky-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <p className="text-sm font-bold text-[#003956]">
                    {edition.title || "Edicao sem titulo"}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
                    <span>{edition.month || "Sem mes"}</span>
                    <span>{statusLabel(edition.status)}</span>
                    <span>{formatDate(edition.publishDate)}</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </aside>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {draft ? (
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Titulo da edicao *</span>
                  <input
                    value={draft.title}
                    onChange={(event) => updateDraft("title", event.target.value)}
                    required
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Slug publico</span>
                  <input
                    value={draft.slug}
                    onChange={(event) => updateDraft("slug", slugify(event.target.value))}
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Mes</span>
                  <input
                    value={draft.month}
                    onChange={(event) => updateDraft("month", event.target.value)}
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Numero</span>
                  <input
                    value={draft.editionNumber}
                    onChange={(event) => updateDraft("editionNumber", event.target.value)}
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Status</span>
                  <select
                    value={draft.status}
                    onChange={(event) => updateDraft("status", event.target.value as MbNewsStatus)}
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Publicacao</span>
                  <input
                    type="date"
                    value={draft.publishDate}
                    onChange={(event) => updateDraft("publishDate", event.target.value)}
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Titulo do hero</span>
                  <input
                    value={draft.heroTitle}
                    onChange={(event) => updateDraft("heroTitle", event.target.value)}
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Imagem de capa</span>
                  <input
                    value={draft.coverImage || ""}
                    onChange={(event) => updateDraft("coverImage", event.target.value)}
                    placeholder="/images/nome-da-imagem.jpg"
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">Subtitulo do hero</span>
                <textarea
                  value={draft.heroSubtitle}
                  onChange={(event) => updateDraft("heroSubtitle", event.target.value)}
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                />
              </label>

              <div className="grid gap-5 md:grid-cols-[280px_minmax(0,1fr)]">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Titulo editorial</span>
                  <input
                    value={draft.editorialTitle}
                    onChange={(event) => updateDraft("editorialTitle", event.target.value)}
                    className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Texto editorial</span>
                  <textarea
                    value={draft.editorialBody}
                    onChange={(event) => updateDraft("editorialBody", event.target.value)}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  />
                </label>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
                      Blocos de conteudo
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Use blocos para montar as pautas da edicao sem editar HTML.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blockTypeOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => addBlock(option.value)}
                        className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-[#003956] transition hover:border-sky-400"
                      >
                        + {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {draft.blocks.map((block, index) => (
                    <div key={block.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <p className="text-sm font-black text-[#003956]">Bloco {index + 1}</p>
                        <button
                          type="button"
                          onClick={() => removeBlock(block.id)}
                          className="min-h-11 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100"
                        >
                          Remover
                        </button>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <label className="block">
                          <span className="mb-2 block text-sm font-bold text-slate-700">Tipo</span>
                          <select
                            value={block.type}
                            onChange={(event) =>
                              updateBlock(block.id, "type", event.target.value as MbNewsBlockType)
                            }
                            className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                          >
                            {blockTypeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-sm font-bold text-slate-700">Rotulo</span>
                          <input
                            value={block.eyebrow || ""}
                            onChange={(event) => updateBlock(block.id, "eyebrow", event.target.value)}
                            className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-sm font-bold text-slate-700">Imagem</span>
                          <input
                            value={block.image || ""}
                            onChange={(event) => updateBlock(block.id, "image", event.target.value)}
                            placeholder="/images/arquivo.jpg"
                            className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                          />
                        </label>
                      </div>

                      <label className="mt-4 block">
                        <span className="mb-2 block text-sm font-bold text-slate-700">Titulo</span>
                        <input
                          value={block.title}
                          onChange={(event) => updateBlock(block.id, "title", event.target.value)}
                          className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                        />
                      </label>

                      <label className="mt-4 block">
                        <span className="mb-2 block text-sm font-bold text-slate-700">Texto</span>
                        <textarea
                          value={block.body}
                          onChange={(event) => updateBlock(block.id, "body", event.target.value)}
                          rows={4}
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                        />
                      </label>

                      {block.type === "cta" ? (
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                          <label className="block">
                            <span className="mb-2 block text-sm font-bold text-slate-700">Texto do botao</span>
                            <input
                              value={block.ctaLabel || ""}
                              onChange={(event) => updateBlock(block.id, "ctaLabel", event.target.value)}
                              className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                            />
                          </label>
                          <label className="block">
                            <span className="mb-2 block text-sm font-bold text-slate-700">Link do WhatsApp</span>
                            <input
                              value={block.ctaUrl || ""}
                              onChange={(event) => updateBlock(block.id, "ctaUrl", event.target.value)}
                              placeholder="https://wa.me/..."
                              className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500"
                            />
                          </label>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">
                  Preview rapido
                </p>
                <h2 className="mt-3 text-3xl font-black text-[#003956]">
                  {draft.heroTitle || draft.title || "Titulo da MB News"}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                  {draft.heroSubtitle || "O subtitulo da edicao aparece aqui."}
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {draft.blocks.slice(0, 4).map((block) => (
                    <article key={block.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                        {block.eyebrow || statusLabel(draft.status)}
                      </p>
                      <h3 className="mt-2 text-lg font-black text-[#003956]">
                        {block.title || "Titulo do bloco"}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                        {block.body || "Texto resumido do bloco de conteudo."}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => void handleDelete()}
                  className="min-h-11 rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100"
                >
                  Excluir
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="min-h-11 rounded-xl bg-[#003956] px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Salvando..." : "Salvar edicao"}
                </button>
              </div>

              {selectedEdition ? (
                <p className="text-right text-xs text-slate-400">
                  Ultima atualizacao: {new Date(selectedEdition.updatedAt).toLocaleString("pt-BR")}
                </p>
              ) : null}
            </form>
          ) : null}
        </section>
      </div>
    </main>
  );
}
