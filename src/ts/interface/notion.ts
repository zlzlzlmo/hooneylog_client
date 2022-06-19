export interface Tag {
  id: string;
  name: string;
}

export interface NotionPost {
  id: string;
  category: string;
  createdAt: string;
  description: string;
  tags: Tag[];
  title: string;
}
