import { instance } from './axios/instance';

interface IApi {
  get: () => void;
}

abstract class Api {
  async get() {
    // instance.get()
  }
}

export default Api;
