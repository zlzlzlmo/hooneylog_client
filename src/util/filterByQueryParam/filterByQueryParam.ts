import { NotionPost } from 'api/notion/notionApi';

export interface ICommand {
  execute: (notionList: NotionPost[]) => NotionPost[];
}

class FilterByQueryParam {
  constructor(private readonly notionList: NotionPost[]) {}

  excuteCommand(command: ICommand) {
    const result = command.execute(this.notionList);
    return result;
  }
}

export default FilterByQueryParam;
