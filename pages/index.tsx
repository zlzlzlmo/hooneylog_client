/* eslint-disable react-hooks/exhaustive-deps */
import Layout from 'components/layout/Layout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import NotionService from 'util/notion';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import useDispatchRedux from 'hooks/useDispatchRedux';
import useReduxData from 'hooks/useReduxData';
import Content from 'components/New/content/Content';
import Top from 'components/New/top/Top';
import PostList from 'components/New/post/list/PostList';
import { useEffect } from 'react';
import useFilter from 'hooks/useFilter';
import { NotionPost } from 'ts/interface/notion';
import { useAppDispatch } from 'redux/configStore';
import { setFilteredPostList, setNotionList } from 'redux/modules/post';

interface HomePageProps {
  notionList: NotionPost[];
}

const HomePage = ({ notionList }: HomePageProps) => {
  const { dispatchOriginialNotionList, dispatchFilterNotionList } = useDispatchRedux();
  const { originalNotionList } = useReduxData();
  const { filterByQueryString } = useFilter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNotionList(notionList));
  }, []);

  useEffect(() => {
    dispatch(setFilteredPostList(notionList));
  }, []);
  // dispatchOriginialNotionList(notionList);
  // dispatchFilterNotionList(notionList);

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
  const notionList = await NotionService.getAllPost();
  return {
    props: {
      notionList,
    },
    revalidate: 1,
  };
};

export default HomePage;
