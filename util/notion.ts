/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotionPost } from 'ts/interface/notion';
import APIBuilder from './api/builder';

class NotionService {
  static async getAllPost(): Promise<NotionPost[]> {
    const allPost = new APIBuilder('GET', `notion/all`).build();
    const result = await allPost.fetch();
    return result;
  }

  static async getPostById(id: string): Promise<NotionPost> {
    const post = new APIBuilder('GET', `notion/${id}`).build();
    const result = await post.fetch();
    return result;
  }

  static async getBlocksById(id: string): Promise<any> {
    const blocks = new APIBuilder('GET', `notion/blocks/${id}`).build();
    const result = await blocks.fetch();
    return result;
  }
}

export default NotionService;
