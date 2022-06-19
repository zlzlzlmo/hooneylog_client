/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
import Content from 'components/atoms/content';
import Layout from 'components/molecules/layout';
import MoveToAnotherPost from 'components/molecules/moveToAnotherPost';
import PostDetailedContents from 'components/molecules/postDetailedContents';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';

interface Props {
  notionList: NotionPost[];
  notionPost: NotionPost;
  blocks: any;
}

const PostDetail = ({ notionList, notionPost, blocks }: Props) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNotionList(notionList));
  }, []);

  if (router.isFallback) {
    return <></>;
  }

  return (
    <Layout>
      <div>
        <Content padding="5rem 0">
          <PostDetailedContents
            postId={notionPost.id}
            title={notionPost.title}
            createdAt={notionPost.createdAt}
            category={notionPost.category}
            tags={notionPost.tags}
            blocks={blocks}
          />

          <MoveToAnotherPost notionList={notionList} notionPost={notionPost} />
          {/* <FbComment slug={slug} /> */}
        </Content>
      </div>
    </Layout>
  );
};

export default PostDetail;
