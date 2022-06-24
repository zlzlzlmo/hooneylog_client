import QueryParam from './queryParam';

class FirstQuery extends QueryParam {
  getFirstKeyName() {
    let result = this.query.keys().next().value;
  }
}

export default FirstQuery;
