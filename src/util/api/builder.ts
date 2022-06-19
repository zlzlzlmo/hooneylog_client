/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
import API from './api';

type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

class APIBuilder<T> {
  public method: Method;

  public url: string;

  public body: string | undefined;

  constructor(method: Method, url: string) {
    this.method = method;
    this.url = url;
  }

  public setBody(body: object): APIBuilder<T> {
    this.body = JSON.stringify(body);
    return this;
  }

  public build(): API<T> {
    return new API(this);
  }
}

export default APIBuilder;
