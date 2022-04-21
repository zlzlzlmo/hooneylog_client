import Layout from 'components/layout/Layout';
import { SanityPost } from 'ts/interface/post';
import Pagination from 'components/common/pagination/Pagintation';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import usePagination from 'hooks/usePagination';
import { GetStaticProps } from 'next';
import { sanityClient } from 'sanity/config';
import Head from 'next/head';
import PostList from 'components/posts/PostList';
import PostLength from 'components/common/PostLength/PostLength';

interface HomePageProps {
  postList: SanityPost[];
}
const HomePage = ({ postList }: HomePageProps) => {
  const { pageCount, postListToShow, isLastPost, handlePageClick } = usePagination({ postList });

  return (
    <>
      <Head>
        <title>Hooney Blog</title>
      </Head>
      <Layout>
        <div>
          <Introduce mainImage="/images/background.jpg" />
          <Content>
            <PostLength length={postList.length} />
            <PostList postListToShow={postListToShow} handlePageClick={handlePageClick} isLastPost={isLastPost} />
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
          </Content>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = `
  *[_type=="post"][0...6]{
    _id,
    title,
    author->{
    name,
    image
    },
    mainImage,
    slug,
    body,
    category,
    _createdAt
  } | order(_createdAt desc)
  `;
  const postList = await sanityClient.fetch<SanityPost[]>(query);

  return {
    props: {
      postList,
    },
    revalidate: 60,
  };
};

export default HomePage;
