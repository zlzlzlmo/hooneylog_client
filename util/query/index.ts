/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
import { QueryParamType } from 'ts/type';

class QueryParam {
  private paramObj = {};

  private get currentParams() {
    return {
      category: QueryParam.queryParamFor('category'),
      search: QueryParam.queryParamFor('search'),
      tag: QueryParam.queryParamFor('tag'),
    };
  }

  static queryParamFor(queryParam: QueryParamType) {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get(queryParam);
    }
    return '';
  }

  queryParamsArray(): [string, string][] {
    if (this.currentParams.category !== null) {
      this.paramObj = { ...this.paramObj, 카테고리: this.currentParams.category };
    }

    if (this.currentParams.search !== null) {
      this.paramObj = { ...this.paramObj, 검색어: this.currentParams.search };
    }

    if (this.currentParams.tag !== null) {
      this.paramObj = { ...this.paramObj, 태그: this.currentParams.tag };
    }

    return Object.entries(this.paramObj);
  }
}

export default QueryParam;
