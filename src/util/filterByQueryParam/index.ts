/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-constructor */
import { NotionPost } from 'ts/interface/notion';
import QueryParam from 'util/query';
import Search from 'util/search';

class FilterByQueryParam {
  constructor(private notionList: NotionPost[]) {}

  private byCategory() {
    const categoryParam = QueryParam.queryParamFor('category');

    if (!categoryParam) {
      return;
    }
    this.notionList = this.notionList.filter(({ category }) => {
      return category === QueryParam.queryParamFor('category');
    });
  }

  private bySearchValue() {
    const searchParam = QueryParam.queryParamFor('search');
    if (!searchParam) {
      return;
    }
    this.notionList = new Search(this.notionList).filteredListBySearchValue(searchParam);
  }

  private byTag() {
    const tagParam = QueryParam.queryParamFor('tag');

    if (!tagParam) {
      return;
    }

    this.notionList = this.notionList.filter(({ tags }) => {
      const index = tags.findIndex(({ name }) => name === QueryParam.queryParamFor('tag'));
      return index !== -1;
    });
  }

  filteredList() {
    this.byCategory();
    this.bySearchValue();
    this.byTag();
    return this.notionList;
  }
}
export default FilterByQueryParam;
