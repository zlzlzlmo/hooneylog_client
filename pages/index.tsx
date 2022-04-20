import Layout from 'components/layout/Layout';
import { SanityPost } from 'ts/interface/post';
import Pagination from 'components/common/pagination/Pagintation';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import usePagination from 'hooks/usePagination';
import { GetStaticProps } from 'next';
import { sanityClient } from 'sanity/config';
import PostList from 'components/posts/PostList';
import Head from 'next/head';

interface HomePageProps {
  postList: SanityPost[];
}
const HomePage = ({ postList }: HomePageProps) => {
  const { pageCount, postListToShow, handlePageClick } = usePagination({ postList });

  return (
    <div>
      <Head>
        <title>Hooney Blog</title>
      </Head>
      <Layout>
        <Introduce mainImage="/images/background.jpg" />
        <Content>
          <PostList postList={postListToShow} handlePageClick={handlePageClick} allPostListLength={postList.length} />
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Content>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = `
  *[_type=="post"]{
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
