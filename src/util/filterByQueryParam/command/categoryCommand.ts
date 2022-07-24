import { NotionPost } from 'api/notion/notionApi';
import { ALL } from 'util/category/category';
import CategoryQuery from 'util/queryParam/categoryQuery';
import { ICommand } from '../filterCommand';

class CategoryCommand implements ICommand {
  constructor(private readonly category: string) {}

  execute(notionList: NotionPost[]): NotionPost[] {
    if (this.category === ALL) return notionList;
    const result = notionList.filter(({ category }) => category === this.category);
    return result;
  }
}

export default CategoryCommand;
