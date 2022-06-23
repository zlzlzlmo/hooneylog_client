import Api from 'api/api';
import { OEndpoint } from 'api/endpoint';

class NotionApi extends Api {
  async getAllPost() {
    const result = await this.get(OEndpoint.allNotion);
    return result;
  }

  async getOnePostById(id: string) {
    const result = await this.getByQueyParam(OEndpoint.oneNotion, [id]);
    return result;
  }

  async getBlocksById(id: string) {
    const result = await this.getByQueyParam(OEndpoint.blocksNotion, [id]);
    return result;
  }
}

export default NotionApi;
