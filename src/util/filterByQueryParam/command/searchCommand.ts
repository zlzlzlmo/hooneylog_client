/* eslint-disable import/no-unresolved */
import { NotionPost } from 'api/notion/notionApi';
import SearchQuery from 'util/queryParam/searchQuery';
import { ICommand } from '../filterByQueryParam';

class SearchCommand implements ICommand {
  constructor(private readonly searchQuery: SearchQuery = new SearchQuery()) {}

  execute(notionList: NotionPost[]) {
    const result = notionList.filter(({ title, description }) => {
      return this.isIncludedTitle(title) || this.isIncludedDescription(description);
    });
    return result;
  }

  private isIncludedTitle(title: string): boolean {
    const value = this.searchQuery.getSearchQueryValue();
    if (!value) return false;
    return title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  }

  private isIncludedDescription(description: string): boolean {
    const value = this.searchQuery.getSearchQueryValue();
    if (!value) return false;
    return description.toLowerCase().indexOf(value) !== -1;
  }
}

export default SearchCommand;
