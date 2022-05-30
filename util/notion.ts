/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotionPost } from 'ts/interface/notion';

class NotionService {
  static async getAllPost(): Promise<NotionPost[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notion/all`);
    const result = await response.json();
    return result;
  }

  static async getPostById(id: string): Promise<NotionPost> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notion/${id}`);
    const result = await response.json();
    return result;
  }

  static async getBlocksById(id: string): Promise<any> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notion/blocks/${id}`);
    const result = await response.json();
    return result;
  }
}

export default NotionService;
