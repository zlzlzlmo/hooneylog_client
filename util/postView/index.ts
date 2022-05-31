import APIBuilder from 'util/api/builder';

class PostView {
  static async viewByPostId(postId: string): Promise<number> {
    const body = {
      postId,
    };
    const view = new APIBuilder('POST', 'post/view').setBody(body).build();
    const result = await view.fetch();
    return result;
  }
}

export default PostView;
