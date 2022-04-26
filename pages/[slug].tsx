/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import FbComment from 'components/comment/FbComment';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import Layout from 'components/layout/Layout';
import PostDetail from 'components/postDetail/PostDetail';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { sanityClient, urlFor } from 'sanity/config';
import { SanityPost } from 'ts/interface/post';
import ApiManager from 'util/api';
import NotionService from 'util/notion';

interface PostDetailPageProps {
  post: SanityPost;
}
const PostDetailPage = ({ postSlug }: any) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  console.log('slug : ', slug);
  return (
    <Layout>
      {/* <Head>
        <meta property="og:image" content={urlFor(post.mainImage).url()} />
        <meta property="og:description" content={post.title} />
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
          <FbComment slug={slug} />
        </Content>
      </div> */}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const notionInstance = new NotionService();
  const database = await notionInstance.getDatabase();

  const slugs = database.map(({ id }) => ({
    params: { slug: id },
  }));

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

  return {
    props: {
      postSlug: slug,
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
