/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { NotionPost } from 'ts/interface/notion';

class Post {
  private readonly notionList;

  private readonly currentPost;

  private _currentIndex = 0;

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(index: number) {
    this._currentIndex = index;
  }

  get previosPost() {
    return this.notionList[this.currentIndex - 1];
  }

  get nextPost() {
    return this.notionList[this.currentIndex + 1];
  }

  constructor(notionList: NotionPost[], currentPost: NotionPost) {
    this.notionList = notionList;
    this.currentPost = currentPost;

    if (!this.notionList) {
      return;
    }

    this.currentIndex = this.notionList.findIndex(({ id }) => id === this.currentPost.id);
  }

  private static getIdAndTitle(post: NotionPost) {
    return {
      id: post.id,
      title: post.title,
    };
  }
}

export default Post;
