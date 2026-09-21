export type MbNewsStatus = "draft" | "scheduled" | "published";

export type MbNewsBlockType = "text" | "highlight" | "ranking" | "cta";

export interface MbNewsBlock {
  id: string;
  type: MbNewsBlockType;
  eyebrow?: string;
  title: string;
  body: string;
  image?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

export interface MbNewsEdition {
  id: string;
  title: string;
  slug: string;
  month: string;
  editionNumber: string;
  status: MbNewsStatus;
  publishDate: string;
  heroTitle: string;
  heroSubtitle: string;
  editorialTitle: string;
  editorialBody: string;
  coverImage?: string;
  blocks: MbNewsBlock[];
  updatedAt: string;
}
