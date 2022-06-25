import { GetStaticProps } from 'next';
import Head from 'next/head';
import NotionApi, { NotionPost } from 'api/notion/notionApi';
import CategoryList from 'components/blocks/categoryList/CategoryList';
import PostItemList from 'components/blocks/postItemList/PostItemList';
import Layout from 'components/templates/layout/Layout';
import Introduction from 'components/blocks/introduction/Introduction';

interface HomepageProps {
  notionList: NotionPost[];
}

const HomePage = ({ notionList }: HomepageProps) => {
  return (
    <>
      <Head>
        <title>Hooney Blog</title>
      </Head>
      <Layout>
        <div>
          <Introduction />
          <CategoryList notionList={notionList} />
          <PostItemList notionList={notionList} />
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notionList = await new NotionApi().getAllPost();
  return {
    props: {
      notionList,
    },
    revalidate: 1,
  };
};

export default HomePage;
