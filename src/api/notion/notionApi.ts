import Api from 'api/api';
import { OEndpoint } from 'api/endpoint';
import { NotionPost } from 'ts/interface/notion';

class NotionApi extends Api {
  async getAllPost(): Promise<NotionPost[]> {
    const result = await this.get(OEndpoint.allNotion);
    return result;
  }

  async getOnePostById(id: string): Promise<NotionPost> {
    const result = await this.getByQueyParam(OEndpoint.oneNotion, [id]);
    return result;
  }

  async getBlocksById(id: string): Promise<any> {
    const result = await this.getByQueyParam(OEndpoint.blocksNotion, [id]);
    return result;
  }
}

export default NotionApi;
