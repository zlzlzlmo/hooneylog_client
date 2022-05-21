/* eslint-disable react-hooks/exhaustive-deps */
import Layout from 'components/layout/Layout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import NotionService from 'util/notion';
import { INotionPost } from 'ts/interface/notion';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import useHandleReduxData from 'hooks/useHandleReduxData';
import useReduxData from 'hooks/useReduxData';
import Content from 'components/New/content/Content';
import Top from 'components/New/top/Top';
import PostList from 'components/New/post/list/PostList';
import { useEffect } from 'react';
import useFilter from 'hooks/useFilter';

interface HomePageProps {
  notionList: INotionPost[];
}

const HomePage = ({ notionList }: HomePageProps) => {
  const { dispatchOriginialNotionList } = useHandleReduxData();
  const { originalNotionList } = useReduxData();
  dispatchOriginialNotionList(notionList);
  const { filterByQueryString } = useFilter();
  useEffect(() => {
    filterByQueryString();
  }, [originalNotionList]);
  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
      </Head>
      <Layout>
        <div>
          <Content>
            <Top />
            <PostList />
          </Content>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notionInstance = new NotionService();
  const notionList = await notionInstance.getDatabase();

  return {
    props: {
      notionList,
    },
    revalidate: 1,
  };
};

export default HomePage;
