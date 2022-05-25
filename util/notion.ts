/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotionPost } from 'ts/interface/notion';

class NotionService {
  static async getAllPost(): Promise<NotionPost[]> {
    const response = await fetch('http://localhost:3000/notion/all');
    const result = await response.json();
    return result;
  }

  static async getPostById(id: string): Promise<NotionPost> {
    const response = await fetch(`http://localhost:3000/notion/${id}`);
    const result = await response.json();
    return result;
  }

  static async getBlocksById(id: string): Promise<any> {
    const response = await fetch(`http://localhost:3000/notion/blocks/${id}`);
    const result = await response.json();
    return result;
  }
}

export default NotionService;
