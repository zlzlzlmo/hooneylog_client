/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import NotionService from 'util/notion';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import { NotionPost } from 'ts/interface/notion';
import Home from 'components/organisms/home';

interface Props {
  notionList: NotionPost[];
}

const HomePage = ({ notionList }: Props) => {
  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
      </Head>
      <Home notionList={notionList} />
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
