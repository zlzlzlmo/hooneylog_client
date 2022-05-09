/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-constant-condition */
/* eslint-disable camelcase */
/* eslint-disable no-await-in-loop */
import { Client } from '@notionhq/client';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { INotionProperties } from 'ts/interface/notion';

class NotionService {
  private readonly notion: Client;

  private readonly databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE ?? '';

  constructor() {
    this.notion = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_KEY,
    });
  }

  async getDatabase() {
    const status = process.env.NODE_ENV === 'production' ? 'published' : 'ready';
    const response = await this.notion.databases.query({
      database_id: this.databaseId,
      filter: {
        property: 'status',
        select: {
          equals: status,
        },
      },
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
    });

    return response.results;
  }

  async getPage(pageId: string): Promise<GetPageResponse> {
    const response = await this.notion.pages.retrieve({ page_id: pageId });
    return response;
  }

  async getBlocks(blockId: string) {
    const blocks = [];
    let cursor: any;

    while (true) {
      const { results, next_cursor } = await this.notion.blocks.children.list({
        block_id: blockId,
        start_cursor: cursor,
      });
      blocks.push(...results);
      if (!next_cursor) {
        break;
      }

      cursor = next_cursor;
    }

    return blocks;
  }

  static getImageUrl(properties: INotionProperties): string {
    if (properties.image == null) {
      return '';
    }
    if (properties.image.files.length < 1) {
      return '';
    }
    const { external, file } = properties.image.files[0];
    if (external == null) {
      return file!.url;
    }

    if (file == null) {
      return external.url;
    }

    return '';
  }
}

export default NotionService;
