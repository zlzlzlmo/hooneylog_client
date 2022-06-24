/* eslint-disable no-use-before-define */
import { NotionPost } from 'api/notion/notionApi';
import AbstractCategory from '../category';

class NotionCategory extends AbstractCategory {
  constructor(notionList: NotionPost[] = []) {
    super(notionList.map(({ category }) => category));
  }
}

export default NotionCategory;
