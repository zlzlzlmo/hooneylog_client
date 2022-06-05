/* eslint-disable class-methods-use-this */
import { NotionPost, Tag } from 'ts/interface/notion';

interface ISearchController {
  filteredListBySearchValue(searchValue: string): NotionPost[];
}

class SearchController implements ISearchController {
  private readonly notionList: NotionPost[];

  constructor(notionList: NotionPost[]) {
    this.notionList = notionList;
  }

  private lowerCaseWithNoSpace(value: string) {
    return value.toLowerCase().replaceAll(' ', '');
  }

  private hasTag(tags: Tag[], searchedValue: string): boolean {
    const result = tags.findIndex((tag) => this.lowerCaseWithNoSpace(tag.name).indexOf(searchedValue) !== -1);
    return result !== -1;
  }

  filteredListBySearchValue(searchValue: string): NotionPost[] {
    const searchedValue = this.lowerCaseWithNoSpace(searchValue);
    const result = this.notionList.filter(({ title, description, tags }) => {
      const textForCompare = this.lowerCaseWithNoSpace(title);
      const descriptionForCompare = this.lowerCaseWithNoSpace(description);

      return (
        textForCompare.indexOf(searchedValue) !== -1 ||
        descriptionForCompare.indexOf(searchValue) !== -1 ||
        this.hasTag(tags, searchedValue)
      );
    });

    return result;
  }
}

export default SearchController;
