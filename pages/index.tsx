/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import Layout from 'components/layout/Layout';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PostList from 'components/posts/PostList';
import NotionService from 'util/notion';
import { INotionPost } from 'ts/interface/notion';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import PostCategoryList from 'components/posts/postCategoryList/PostCategoryList';
import { useEffect } from 'react';
import { useAppDispatch } from 'redux/configStore';
import { setNotionList } from 'redux/modules/post';

interface HomePageProps {
  notionList: INotionPost[];
}

const HomePage = ({ notionList }: HomePageProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNotionList(notionList));
  }, []);

  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
        <meta property="og:description" content="프론트엔드 개발자 신승훈이 직접 개발한 개인 기술 블로그입니다." />
      </Head>
      <Layout>
        <div>
          <Introduce mainImage={BACKGROUND_MAIN_IMAGE} />
          <Content>
            {/* <PostLength length={notionList.length} /> */}
            <PostCategoryList isMobile={false} />
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
