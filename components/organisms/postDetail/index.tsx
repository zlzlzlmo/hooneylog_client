/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
import Content from 'components/atoms/content';
import FbComment from 'components/atoms/fbComment';
import NextPost from 'components/atoms/nextPost';
import PreviosPost from 'components/atoms/previosPost';
import Layout from 'components/molecules/layout';
import PostDetailedContents from 'components/molecules/postDetailedContents';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList } from 'redux/modules/post';
import { NotionPost } from 'ts/interface/notion';
import Post from 'util/post';

interface Props {
  notionList: NotionPost[];
  notionPost: NotionPost;
  blocks: any;
}

const PostDetail = ({ notionList, notionPost, blocks }: Props) => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNotionList(notionList));
  }, []);

  if (router.isFallback) {
    return <></>;
  }

  const { previosPost, nextPost } = new Post(notionList, notionPost);

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

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              margin: '3rem 0',
              gap: '2rem',
              alignItems: 'flex-end',
            }}
          >
            {previosPost && <PreviosPost previosPost={previosPost} />}
            {nextPost && <NextPost nextPost={nextPost} />}
          </div>
          <FbComment slug={slug} />
        </Content>
      </div>
    </Layout>
  );
};

export default PostDetail;
