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
    return title.toLowerCase().indexOf(this.searchQuery.getSearchQueryValue().toLowerCase()) !== -1;
  }

  private isIncludedDescription(description: string): boolean {
    return description.toLowerCase().indexOf(this.searchQuery.getSearchQueryValue()) !== -1;
  }
}

export default SearchCommand;
