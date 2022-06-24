import QueryParam from './queryParam';

class SearchQuery extends QueryParam {
  getSearchQueryValue() {
    return this.getValue('search');
  }
}

export default SearchQuery;
