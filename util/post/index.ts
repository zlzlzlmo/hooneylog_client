/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { NotionPost } from 'ts/interface/notion';

class Post {
  private readonly notionList;

  private _currentPostIndex = 0;

  get currentPostIndex() {
    return this._currentPostIndex;
  }

  set currentPostIndex(index: number) {
    this._currentPostIndex = index;
  }

  get previosPost() {
    return this.notionList[this.currentPostIndex - 1];
  }

  get nextPost() {
    return this.notionList[this.currentPostIndex + 1];
  }

  constructor(notionList: NotionPost[], currentPost: NotionPost) {
    this.notionList = notionList;
    this.currentPostIndex = this.notionList.findIndex(({ id }) => id === currentPost.id);
  }
}

export default Post;
