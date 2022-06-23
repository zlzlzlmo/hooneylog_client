/* eslint-disable no-unused-expressions */
import { ITag, NotionPost } from 'ts/interface/notion';
import TagQuery from 'util/queryParam/tagQuery';
import { ICommand } from '../filterByQueryParam';

class TagCommand implements ICommand {
  constructor(private readonly tagQuery: TagQuery = new TagQuery()) {}

  execute(notionList: NotionPost[]) {
    const result = notionList.filter(({ tags }) => {
      return this.isIncluded(tags);
    });
    return result;
  }

  private isIncluded(tags: ITag[]): boolean {
    return tags.findIndex(({ name }) => name === this.tagQuery.getTagQueryValue()) !== -1;
  }
}

export default TagCommand;
