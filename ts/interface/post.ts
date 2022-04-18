interface KeyType {
  _key: string;
  _type: string;
}

interface BodyChild extends KeyType {
  marks: unknown[];
  text: string;
}

interface PostBody extends KeyType {
  children: BodyChild[];
  markDefs: unknown[];
  style: string;
}

export interface Post {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  body: PostBody[];
  categories: unknown[];
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt: string;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
}
