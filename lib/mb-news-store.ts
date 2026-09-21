import { promises as fs } from "fs";
import path from "path";
import { Redis } from "@upstash/redis";
import type { MbNewsEdition } from "@/types/mb-news";

const contentDir = path.join(process.cwd(), "content");
const editionsPath = path.join(contentDir, "mb-news-editions.json");
const tmpPath = "/tmp/mb-news-editions.json";
const KV_KEY = "mb_news_editions";

const isVercel = !!process.env.VERCEL;
const hasKV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
const writePath = isVercel && !hasKV ? tmpPath : editionsPath;

function getRedis() {
  return new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
}

async function ensureStore() {
  if (!isVercel) {
    await fs.mkdir(contentDir, { recursive: true });
    try {
      await fs.access(editionsPath);
    } catch {
      await fs.writeFile(editionsPath, "[]\n", "utf8");
    }
  }
}

function normalizeEdition(edition: MbNewsEdition): MbNewsEdition {
  return {
    ...edition,
    title: edition.title || "",
    slug: edition.slug || "",
    month: edition.month || "",
    editionNumber: edition.editionNumber || "",
    status: edition.status || "draft",
    publishDate: edition.publishDate || new Date().toISOString().slice(0, 10),
    heroTitle: edition.heroTitle || "",
    heroSubtitle: edition.heroSubtitle || "",
    editorialTitle: edition.editorialTitle || "",
    editorialBody: edition.editorialBody || "",
    coverImage: edition.coverImage || "",
    blocks: Array.isArray(edition.blocks) ? edition.blocks : [],
    updatedAt: edition.updatedAt || new Date().toISOString(),
  };
}

export async function readMbNewsEditions(): Promise<MbNewsEdition[]> {
  if (hasKV) {
    try {
      const redis = getRedis();
      const editions = await redis.get<MbNewsEdition[]>(KV_KEY);
      return (editions || []).map(normalizeEdition);
    } catch {
      // Fallback to bundled/local file.
    }
  }

  await ensureStore();
  let readFrom = editionsPath;
  if (isVercel) {
    try {
      await fs.access(tmpPath);
      readFrom = tmpPath;
    } catch {
      readFrom = editionsPath;
    }
  }

  try {
    const raw = await fs.readFile(readFrom, "utf8");
    const parsed = JSON.parse(raw) as MbNewsEdition[];
    return parsed.map(normalizeEdition);
  } catch {
    return [];
  }
}

export async function writeMbNewsEditions(editions: MbNewsEdition[]): Promise<void> {
  const normalized = editions
    .map((edition) => normalizeEdition({ ...edition, updatedAt: new Date().toISOString() }))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  if (hasKV) {
    const redis = getRedis();
    await redis.set(KV_KEY, normalized);
    return;
  }

  await ensureStore();
  await fs.writeFile(writePath, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
}

export async function readPublishedMbNewsEditions(): Promise<MbNewsEdition[]> {
  const editions = await readMbNewsEditions();
  const today = new Date();
  return editions.filter((edition) => {
    if (edition.status !== "published") return false;
    return new Date(`${edition.publishDate}T00:00:00`) <= today;
  });
}
