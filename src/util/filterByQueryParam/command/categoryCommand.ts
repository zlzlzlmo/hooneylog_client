import { NotionPost } from 'api/notion/notionApi';
import { ALL } from 'util/category/category';
import CategoryQuery from 'util/queryParam/categoryQuery';
import { ICommand } from '../filterByQueryParam';

class CategoryCommand implements ICommand {
  constructor(private readonly categoryQuery: CategoryQuery = new CategoryQuery()) {}

  execute(notionList: NotionPost[]): NotionPost[] {
    if (this.categoryQuery.getCategoryQueryValue() === ALL) return notionList;
    const result = notionList.filter(({ category }) => category === this.categoryQuery.getCategoryQueryValue());
    return result;
  }
}

export default CategoryCommand;
