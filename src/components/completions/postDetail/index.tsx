/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
import { NotionPost } from 'api/notion/notionApi';
import MoveToAnotherPost from 'components/molecules/moveToAnotherPost';
import PostDetailedContents from 'components/molecules/postDetailedContents';
import InnerContainer from 'components/templates/container/InnerContainer';
import Layout from 'components/templates/layout/Layout';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  notionList: NotionPost[];
  notionPost: NotionPost;
  blocks: any;
}

const PostDetail = ({ notionList, notionPost, blocks }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }

  return (
    <Layout>
      <div>
        <InnerContainer>
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
        </InnerContainer>
      </div>
    </Layout>
  );
};

export default PostDetail;
