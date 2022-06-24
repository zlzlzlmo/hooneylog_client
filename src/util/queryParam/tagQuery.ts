import QueryParam from './queryParam';

class TagQuery extends QueryParam {
  getTagQueryValue() {
    return this.getValue('tag');
  }
}

export default TagQuery;
