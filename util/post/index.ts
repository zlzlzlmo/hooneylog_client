/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { NotionPost } from 'ts/interface/notion';

class Post {
  private readonly notionList;

  private readonly currentPost;

  get currentPostIndex() {
    return this.notionList.findIndex(({ id }) => id === this.currentPost.id);
  }

  get previosPost() {
    return this.notionList[this.currentPostIndex - 1];
  }

  get nextPost() {
    return this.notionList[this.currentPostIndex + 1];
  }

  constructor(notionList: NotionPost[], currentPost: NotionPost) {
    this.notionList = notionList;
    this.currentPost = currentPost;
  }
}

export default Post;
