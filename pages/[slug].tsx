/* eslint-disable no-underscore-dangle */
import FbComment from 'components/comment/FbComment';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import Layout from 'components/layout/Layout';
import PostDetail from 'components/postDetail/PostDetail';
import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { sanityClient, urlFor } from 'sanity/config';
import { SanityPost } from 'ts/interface/post';
import ApiManager from 'util/api';

interface PostDetailPageProps {
  post: SanityPost;
}
const PostDetailPage = ({ post }: PostDetailPageProps) => {
  return (
    <Layout>
      <Head>
        <meta property="og:image" content={urlFor(post.mainImage).url()} />
        <meta property="fb:app_id" content="540132141049632" />
        <title>Hooney Blog - {post.title}</title>
      </Head>
      <div>
        <Introduce mainImage={post.mainImage} />
        <Content>
          <PostDetail
            body={post.body}
            title={post.title}
            createdAt={post._createdAt}
            authorName={post.author.name}
            category={post.category}
            authorImage={post.author.image}
          />
        </Content>
        <FbComment />
      </div>
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
    fallback: false,
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
  *[_type=="post" && slug.current == "${slug}"]{
    _createdAt,
    _id,
    author-> {
    name,image
  },
  body,
  mainImage,
  slug,
  title,
  category
  }
  `;

  const instance = new ApiManager<SanityPost[]>(query);
  const response = await instance.sanityFetch();
  const post = response[0];
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default PostDetailPage;
