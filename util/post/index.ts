/* eslint-disable consistent-return */
import { INotionPost } from 'ts/interface/notion';
import NotionBlock from 'util/block';

class Post {
  private readonly notionList;

  private readonly currentPage;

  private currentIndex = 0;

  constructor(notionList: INotionPost[], currentPage: INotionPost) {
    this.notionList = notionList;
    this.currentPage = currentPage;

    if (!this.notionList) {
      return;
    }

    this.currentIndex = this.notionList.findIndex(({ id }) => id === this.currentPage.id);
  }

  get previosPost() {
    const post = this.notionList[this.currentIndex - 1];
    return Post.getIdAndTitle(post);
  }

  get nextPost() {
    const post = this.notionList[this.currentIndex + 1];
    return Post.getIdAndTitle(post);
  }

  private static getIdAndTitle(post: INotionPost) {
    if (post === undefined) {
      return;
    }
    return {
      id: post.id,
      title: new NotionBlock(post.properties).title,
    };
  }
}

export default Post;
