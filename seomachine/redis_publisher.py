#!/usr/bin/env python3
"""
MB Finance — Redis Publisher
Publica artigos gerados pelo SEO Machine direto na API do blog (Upstash Redis).

Uso:
    python redis_publisher.py drafts/meu-artigo.md
    python redis_publisher.py drafts/meu-artigo.md --featured
    python redis_publisher.py drafts/meu-artigo.md --dry-run
"""

import argparse
import json
import os
import re
import sys
import uuid
from datetime import date

import requests

# ── Configuração ──────────────────────────────────────────────────────────────

# URL base do site (produção ou local)
SITE_URL = os.getenv("MBFINANCE_SITE_URL", "https://mbfinance-sites.vercel.app")
ADMIN_TOKEN = os.getenv("BLOG_ADMIN_TOKEN", "mbfinance2026")
API_ENDPOINT = f"{SITE_URL}/api/blog/posts"

# Categorias válidas do blog
VALID_CATEGORIES = {
    "credito":      "Crédito",
    "gestao":       "Gestão",
    "conta-pj":     "Conta PJ",
    "mercado":      "Mercado",
    "antecipacao":  "Antecipação",
    "noticias":     "Notícias",
}

# ── Parsing do frontmatter ─────────────────────────────────────────────────────

def parse_draft(filepath: str) -> dict:
    """Lê o arquivo .md e extrai frontmatter + conteúdo."""
    with open(filepath, "r", encoding="utf-8") as f:
        raw = f.read()

    meta = {}
    body = raw

    # Extrai campos do frontmatter estilo "**Campo**: valor"
    patterns = {
        "title":       r"\*\*(?:Title|Título|H1)\*\*:\s*(.+)",
        "slug":        r"\*\*(?:URL Slug|Slug)\*\*:\s*(.+)",
        "seoTitle":    r"\*\*(?:Meta Title|SEO Title)\*\*:\s*(.+)",
        "seoDesc":     r"\*\*(?:Meta Description|SEO Desc)\*\*:\s*(.+)",
        "keywords":    r"\*\*(?:Target Keyword|Focus Keyword|Keywords?)\*\*:\s*(.+)",
        "excerpt":     r"\*\*(?:Excerpt|Resumo)\*\*:\s*(.+)",
        "category":    r"\*\*(?:Category|Categoria)\*\*:\s*(.+)",
        "image":       r"\*\*(?:Image|Imagem|Featured Image)\*\*:\s*(.+)",
        "readTime":    r"\*\*(?:Read Time|Tempo de leitura)\*\*:\s*(.+)",
    }

    for key, pattern in patterns.items():
        m = re.search(pattern, raw, re.IGNORECASE)
        if m:
            meta[key] = m.group(1).strip()

    # Fallback: tenta extrair o H1 como título
    if not meta.get("title"):
        m = re.search(r"^#\s+(.+)", raw, re.MULTILINE)
        if m:
            meta["title"] = m.group(1).strip()

    # Gera slug a partir do título se não encontrado
    if not meta.get("slug") and meta.get("title"):
        meta["slug"] = slugify(meta["title"])

    return meta, body


def slugify(text: str) -> str:
    """Converte texto em slug URL-friendly."""
    text = text.lower()
    text = re.sub(r"[áàãâä]", "a", text)
    text = re.sub(r"[éèêë]", "e", text)
    text = re.sub(r"[íìîï]", "i", text)
    text = re.sub(r"[óòõôö]", "o", text)
    text = re.sub(r"[úùûü]", "u", text)
    text = re.sub(r"[ç]", "c", text)
    text = re.sub(r"[ñ]", "n", text)
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s]+", "-", text.strip())
    return text


def resolve_category(raw: str) -> tuple[str, str]:
    """Retorna (category_key, categoryLabel) a partir de um texto livre."""
    if not raw:
        return "mercado", "Mercado"
    raw_lower = raw.lower().strip()
    for key, label in VALID_CATEGORIES.items():
        if key in raw_lower or label.lower() in raw_lower:
            return key, label
    # Fallback
    return "mercado", "Mercado"


# ── API do blog ────────────────────────────────────────────────────────────────

def fetch_posts() -> list:
    """Busca todos os posts existentes via GET /api/blog/posts."""
    resp = requests.get(API_ENDPOINT, timeout=15)
    resp.raise_for_status()
    return resp.json().get("posts", [])


def push_posts(posts: list) -> dict:
    """Salva a lista completa de posts via PUT /api/blog/posts."""
    resp = requests.put(
        API_ENDPOINT,
        json={"posts": posts},
        headers={
            "x-blog-admin-token": ADMIN_TOKEN,
            "Content-Type": "application/json",
        },
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Publica artigo no blog MB Finance")
    parser.add_argument("file", help="Caminho para o arquivo .md do rascunho")
    parser.add_argument("--featured", action="store_true", help="Marca como artigo em destaque")
    parser.add_argument("--dry-run", action="store_true", help="Mostra o payload sem publicar")
    args = parser.parse_args()

    if not os.path.exists(args.file):
        print(f"❌  Arquivo não encontrado: {args.file}")
        sys.exit(1)

    print(f"\n📄  Lendo: {args.file}")
    meta, body = parse_draft(args.file)

    # Valida campos obrigatórios
    if not meta.get("title"):
        print("❌  Título não encontrado no arquivo. Adicione '**Title**: Seu título' no rascunho.")
        sys.exit(1)

    category_key, category_label = resolve_category(meta.get("category", ""))

    # Monta o objeto BlogPost
    post = {
        "id":            str(uuid.uuid4()),
        "title":         meta.get("title", ""),
        "slug":          meta.get("slug", slugify(meta["title"])),
        "category":      category_key,
        "categoryLabel": category_label,
        "excerpt":       meta.get("excerpt", meta.get("seoDesc", ""))[:200],
        "image":         meta.get("image", ""),
        "content":       body,
        "readTime":      meta.get("readTime", "5 min"),
        "date":          date.today().isoformat(),
        "featured":      args.featured,
        "published":     True,
        "seoTitle":      meta.get("seoTitle", meta.get("title", ""))[:60],
        "seoDesc":       meta.get("seoDesc", "")[:160],
        "keywords":      meta.get("keywords", ""),
    }

    # Exibe resumo
    print("\n" + "─" * 50)
    print(f"  Título:    {post['title']}")
    print(f"  Slug:      /blog/{post['slug']}")
    print(f"  Categoria: {post['categoryLabel']}")
    print(f"  Keywords:  {post['keywords']}")
    print(f"  SEO Title: {post['seoTitle']}")
    print(f"  Destaque:  {'✅' if post['featured'] else '—'}")
    print("─" * 50)

    if args.dry_run:
        print("\n🔍  Dry-run — payload que seria enviado:")
        print(json.dumps(post, indent=2, ensure_ascii=False))
        return

    # Confirma publicação
    confirm = input("\nPublicar este artigo? [s/N] ").strip().lower()
    if confirm != "s":
        print("Cancelado.")
        return

    print("\n📡  Buscando posts existentes...")
    posts = fetch_posts()
    print(f"   {len(posts)} posts encontrados.")

    # Remove post com mesmo slug se já existir
    posts = [p for p in posts if p.get("slug") != post["slug"]]
    posts.append(post)

    print("📤  Publicando no Upstash Redis...")
    result = push_posts(posts)
    print(f"\n✅  Publicado com sucesso! Total de posts: {result.get('count', len(posts))}")
    print(f"🔗  URL: {SITE_URL}/blog/{post['slug']}\n")


if __name__ == "__main__":
    main()
