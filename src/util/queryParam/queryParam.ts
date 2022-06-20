/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-constructor */

type SearchKeyType = 'search' | 'category' | 'tag';

class QueryParam {
  constructor(private readonly query: URLSearchParams = new URLSearchParams(window.location.search)) {}

  get(key: SearchKeyType) {
    switch (key) {
      case 'search':
      case 'category':
      case 'tag':
        return this.query.get(key);
      default:
        console.error('지정되지 않은 query key값');
    }
  }
}

export default QueryParam;
