/* eslint-disable no-underscore-dangle */
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import Layout from 'components/layout/Layout';
import PostDetail from 'components/postDetail/PostDetail';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { sanityClient } from 'sanity/config';
import { SanityPost } from 'ts/interface/post';

interface PostDetailPageProps {
  post: SanityPost;
}
const PostDetailPage = ({ post }: PostDetailPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    <div>loading</div>;
  }

  return (
    <Layout>
      <Introduce mainImage={post.mainImage} title={post.title} />
      <Content>
        <PostDetail
          body={post.body}
          title={post.title}
          createdAt={post._createdAt}
          authorName={post.author.name}
          category={post.category}
        />
      </Content>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const query = `
    *[_type=="post"]{
      _id,
      slug {
      current
    } 
  }
  `;

  const postList = await sanityClient.fetch<Pick<SanityPost, '_id' | 'slug'>[]>(query);

  const slugs = postList.map(({ slug }) => ({ params: { slug: slug.current } }));

  return {
    paths: slugs,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params == null) {
    return {
      notFound: true,
    };
  }

  const { slug } = params;

  const query = `
    *[_type=="post"]{
      _createdAt,
      _id,
      author-> {
      name,image
    },
    body,
    mainImage,
    slug,
    title
    }
  `;

  const response = await sanityClient.fetch<SanityPost[]>(query, {
    slug,
  });

  const post = response[0];
  return {
    props: {
      post,
    },
  };
};

export default PostDetailPage;
