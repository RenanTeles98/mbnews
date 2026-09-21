import { NextRequest, NextResponse } from "next/server";
import { readMbNewsEditions, writeMbNewsEditions } from "@/lib/mb-news-store";
import type { MbNewsEdition } from "@/types/mb-news";

function isAuthorized(request: NextRequest) {
  const token = request.headers.get("x-admin-token");
  const expected = process.env.MB_NEWS_ADMIN_TOKEN || process.env.BLOG_ADMIN_TOKEN || "mbfinance2026";
  return token === expected;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const editions = await readMbNewsEditions();
  return NextResponse.json({ editions });
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { editions?: MbNewsEdition[] };
  if (!Array.isArray(body.editions)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await writeMbNewsEditions(body.editions);
  return NextResponse.json({ ok: true, count: body.editions.length });
}
