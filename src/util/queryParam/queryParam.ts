/* eslint-disable prefer-const */
/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-constructor */

const searchKeys = ['search', 'category', 'tag'] as const;

export type SearchKeyType = typeof searchKeys[number];

class QueryParam {
  constructor(private readonly query: URLSearchParams = new URLSearchParams(window.location.search)) {}

  get firstKeyName() {
    let result = this.query.keys().next().value;

    const isOkSearchKey = searchKeys.includes(result);

    if (!isOkSearchKey) {
      console.error('잘못된 검색 조건입니다. 현재 가능한 검색 조건은 Search, Categroy, Tag입니다.');
      return;
    }

    return result;
  }

  get firstValue() {
    return this.query.values().next().value;
  }
}

export default QueryParam;
