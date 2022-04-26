/* eslint-disable camelcase */
/* eslint-disable no-await-in-loop */
import { Client } from '@notionhq/client';

class NotionService {
  private notion: Client;

  private databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE ?? '';

  constructor() {
    this.notion = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_KEY,
    });
  }

  async getDatabase() {
    const response = await this.notion.databases.query({
      database_id: this.databaseId,
      filter: {
        property: 'status',
        select: {
          equals: 'published',
        },
      },
    });

    return response.results;
  }

  async getPage(pageId: string) {
    const response = await this.notion.pages.retrieve({ page_id: pageId });
    return response;
  }

  async getBlocks(blockId: string) {
    const response = await this.notion.blocks.children.list({
      block_id: blockId,
    });

    return response;
  }
}

export default NotionService;
