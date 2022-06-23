import { NotionPost } from 'ts/interface/notion';
import { ICommand } from '../filterByQueryParam';

class CategoryCommand implements ICommand {
  execute(notionList: NotionPost[]): NotionPost[] {
    //   const result = notionList.filter(({description})=>)
    return notionList;
  }
}

export default CategoryCommand;
