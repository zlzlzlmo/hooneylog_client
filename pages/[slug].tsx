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
import { INotionPost, INotionProperties } from 'ts/interface/notion';
import { SanityPost } from 'ts/interface/post';
import ApiManager from 'util/api';
import NotionService from 'util/notion';

interface PostDetailPageProps {
  post: INotionPost;
}
const PostDetailPage = ({ post }: PostDetailPageProps) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  console.log('post : ', post);
  return (
    <Layout>
      <Head>
        <meta property="og:image" content={post.properties.image.files[0].file.url} />
        <meta property="og:description" content={post.properties.이름.title[0].plain_text} />
        <meta property="fb:app_id" content="540132141049632" />
        <title>Hooney Blog - {post.properties.이름.title[0].plain_text}</title>
      </Head>
      <div>
        <Introduce mainImage={post.properties.image.files[0].file.url} />
        <Content>
          <PostDetail
            title={post.properties.이름.title[0].plain_text}
            createdAt={post.properties.created_date.date.start}
            category={post.properties.category.multi_select[0].name}
            body={post.results}
          />

          <FbComment slug={slug} />
        </Content>
      </div>
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
  const notionInstance = new NotionService();
  const page = await notionInstance.getPage(slug as string);
  const block = await notionInstance.getBlocks(slug as string);
  return {
    props: {
      post: { ...page, ...block },
    },
    revalidate: 1,
  };
};

export default PostDetailPage;
