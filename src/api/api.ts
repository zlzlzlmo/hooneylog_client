import { instance } from './axios/instance';
import { EndPointType } from './endpoint';

abstract class Api {
  protected async get(url: EndPointType) {
    const result = await instance.get(url);
    return result.data;
  }

  protected async getByQueyParam(url: EndPointType, param: string[]) {
    const queryParam = param.join('/');
    const result = await instance.get(`${url}/${queryParam}`);
    return result.data;
  }

  protected async post(url: EndPointType, body: object) {
    const result = await instance.post(url, body);
    return result.data;
  }
}

export default Api;
