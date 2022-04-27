import { INotionPost, INotionProperties } from 'ts/interface/notion';
import { makeTextToFilter } from './common';

class SearchController {
  private notionList: INotionPost[];

  private properties: INotionProperties | undefined;

  private searchValue = '';

  constructor(notionList: INotionPost[]) {
    this.notionList = notionList;
  }

  private get textForFilter() {
    const result = makeTextToFilter(this.properties?.이름.title[0].plain_text);
    return result;
  }

  private get descriptionForFilter() {
    const result = makeTextToFilter(this.properties?.description.rich_text[0].plain_text);
    return result;
  }

  private get tagListForFilter() {
    const result = this.properties?.tag.multi_select.find((tag) => {
      return makeTextToFilter(tag.name).indexOf(this.searchValue) !== -1;
    });
    return result;
  }

  getFilteredList(searchValue: string) {
    const resultList = this.notionList.filter(({ properties }) => {
      this.properties = properties;
      this.searchValue = searchValue;

      return (
        this.textForFilter?.indexOf(searchValue) !== -1 ||
        this.descriptionForFilter?.indexOf(searchValue) !== -1 ||
        this.tagListForFilter != null
      );
    });

    return resultList;
  }
}

export default SearchController;
