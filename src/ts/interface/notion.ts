export interface ITag {
  id: string;
  name: string;
}

export interface NotionPost {
  id: string;
  category: string;
  createdAt: string;
  description: string;
  tags: ITag[];
  title: string;
}
