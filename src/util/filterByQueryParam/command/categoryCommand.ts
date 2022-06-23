import { NotionPost } from 'ts/interface/notion';
import CategoryQuery from 'util/queryParam/categoryQuery';
import { ICommand } from '../filterByQueryParam';

class CategoryCommand implements ICommand {
  constructor(private readonly categoryQuery: CategoryQuery = new CategoryQuery()) {}

  execute(notionList: NotionPost[]): NotionPost[] {
    const result = notionList.filter(({ category }) => category === this.categoryQuery.getCategoryQueryValue());
    return result;
  }
}

export default CategoryCommand;
