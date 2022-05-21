import Layout from 'components/layout/Layout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import NotionService from 'util/notion';
import { INotionPost } from 'ts/interface/notion';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import useHandleReduxData from 'hooks/useHandleReduxData';
import DesktopCategoryFilter from 'components/categoryFilter/desktop/DesktopCategoryFilter';
import useIsMobile from 'hooks/useIsMobile';
import PostLength from 'components/common/PostLength/PostLength';
import useReduxData from 'hooks/useReduxData';
import HomeBackground from 'components/homeBackground/HomeBackground';
import Content from 'components/New/content/Content';
import Top from 'components/New/top/Top';
import PostList from 'components/New/post/list/PostList';

interface HomePageProps {
  notionList: INotionPost[];
}

const HomePage = ({ notionList }: HomePageProps) => {
  const { dispatchOriginialNotionList } = useHandleReduxData();
  const { filteredNotionList } = useReduxData();
  const isMobile = useIsMobile();
  dispatchOriginialNotionList(notionList);
  console.log('notionList : ', notionList);
  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
      </Head>
      <Layout>
        <div>
          {/* <HomeBackground /> */}
          {/* <Content>
            {!isMobile ? <DesktopCategoryFilter /> : <PostLength length={filteredNotionList.length} />}
            <PostList />
          </Content> */}
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
