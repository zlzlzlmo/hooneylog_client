import Layout from 'components/layout/Layout';
import Content from 'components/layout/content/Content';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PostList from 'components/posts/PostList';
import NotionService from 'util/notion';
import { INotionPost } from 'ts/interface/notion';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import useHandleReduxData from 'hooks/useHandleReduxData';
import DesktopCategoryFilter from 'components/categoryFilter/desktop/DesktopCategoryFilter';
import useIsMobile from 'hooks/useIsMobile';
import PostLength from 'components/common/PostLength/PostLength';
import useReduxData from 'hooks/useReduxData';
import HomeBackground from 'components/homeBackground/HomeBackground';

interface HomePageProps {
  notionList: INotionPost[];
}

const HomePage = ({ notionList }: HomePageProps) => {
  const { dispatchOriginialNotionList } = useHandleReduxData();
  const { filteredNotionList } = useReduxData();
  const isMobile = useIsMobile();
  dispatchOriginialNotionList(notionList);

  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
      </Head>
      <Layout>
        <div>
          <HomeBackground />
          <Content>
            {!isMobile ? <DesktopCategoryFilter /> : <PostLength length={filteredNotionList.length} />}
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
