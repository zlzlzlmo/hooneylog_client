import QueryParam from './queryParam';

class CategoryQuery extends QueryParam {
  getCategoryQueryValue() {
    return this.getValue('category');
  }

  hasCategoryQuery() {
    return this.has('category');
  }
}

export default CategoryQuery;
