/* eslint-disable no-unused-expressions */
import { NotionPost, ITag } from 'api/notion/notionApi';
import TagQuery from 'util/queryParam/tagQuery';
import { ICommand } from '../filterCommand';

class TagCommand implements ICommand {
  constructor(private readonly tagQuery: TagQuery = new TagQuery()) {}

  execute(notionList: NotionPost[]) {
    const result = notionList.filter(({ tags }) => {
      return this.isIncludedTag(tags);
    });
    return result;
  }

  private isIncludedTag(tags: ITag[]): boolean {
    return tags.findIndex(({ name }) => name === this.tagQuery.getTagQueryValue()) !== -1;
  }
}

export default TagCommand;
