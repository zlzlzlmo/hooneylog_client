/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
import APIBuilder from './builder';

type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

class API {
  private method: Method;

  private url: string;

  private body: string | undefined;

  constructor(apiBuilder: APIBuilder) {
    this.method = apiBuilder.method;
    this.url = apiBuilder.url;
    this.body = apiBuilder.body;
  }

  async fetch() {
    const server = `${process.env.NEXT_PUBLIC_BASE_URL}`;
    try {
      const res = await fetch(`${server}/${this.url}`, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...(this.body && { body: this.body }),
      });

      return await res.json();
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default API;
