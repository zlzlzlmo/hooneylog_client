interface SanityKeyType {
  _key: string;
  _type: string;
}

interface SanityBodyChild extends SanityKeyType {
  marks: unknown[];
  text: string;
}

export interface SanityPostBody extends SanityKeyType {
  children: SanityBodyChild[];
  markDefs: unknown[];
  style: string;
}

export interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface SanitySlug {
  _type: string;
  current: string;
}

export interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  body: SanityPostBody[];
  categories: unknown[];
  mainImage: SanityImage;
  publishedAt: string;
  slug: SanitySlug;
  title: string;
}
