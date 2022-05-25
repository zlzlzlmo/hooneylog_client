/* eslint-disable class-methods-use-this */
import { INotionPost, INotionProperties } from 'ts/interface/notion';

interface ISearchController {
  filteredListBySearchValue(searchValue: string): INotionPost[];
}

class SearchController implements ISearchController {
  private readonly notionList: INotionPost[];

  private properties: INotionProperties | undefined;

  private searchValue = '';

  constructor(notionList: INotionPost[]) {
    this.notionList = notionList;
  }

  private get textForFilter(): string {
    return this.makeTextToFilter(this.properties?.이름.title[0]?.plain_text);
  }

  private get descriptionForFilter(): string {
    return this.makeTextToFilter(this.properties?.description.rich_text[0]?.plain_text);
  }

  private get tagListForFilter() {
    return this.properties?.tag.multi_select.find((tag) => {
      return this.makeTextToFilter(tag.name).indexOf(this.searchValue) !== -1;
    });
  }

  private makeTextToFilter(text: string | undefined): string {
    if (text === undefined) {
      return '';
    }
    return text.replaceAll(' ', '').toLowerCase();
  }

  filteredListBySearchValue(searchValue: string): INotionPost[] {
    const result = this.notionList.filter(({ properties }) => {
      this.properties = properties;
      this.searchValue = this.makeTextToFilter(searchValue);

      return (
        this.textForFilter?.indexOf(searchValue) !== -1 ||
        this.descriptionForFilter?.indexOf(searchValue) !== -1 ||
        this.tagListForFilter != null
      );
    });

    return result;
  }
}

export default SearchController;
