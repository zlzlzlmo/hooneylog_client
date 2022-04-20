export interface SanityPostBody {
  _type: string;
  children: [{ text: string }];
  style: string;
}

export interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface SanityPost {
  _id: string;
  author: {
    name: string;
    image: object;
  };
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: {
    _type: string;
    current: string;
  };
  title: string;
  _createdAt: string;
  body: SanityPostBody[];
  category: string;
}
