import QueryParam from './queryParam';

class CategoryQuery extends QueryParam {
  getCategoryQueryValue() {
    return this.getValue('category');
  }
}

export default CategoryQuery;
