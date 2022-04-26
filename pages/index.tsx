import Layout from 'components/layout/Layout';
import { SanityPost } from 'ts/interface/post';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PostList from 'components/posts/PostList';
import PostLength from 'components/common/PostLength/PostLength';
import ApiManager from 'util/api';
import NotionService from 'util/notion';
import { INotionPost } from 'ts/interface/notion';

interface HomePageProps {
  postList: SanityPost[];
  notionList: INotionPost[];
}
const HomePage = ({ postList, notionList }: HomePageProps) => {
  console.log('notionList : ', notionList);
  // const { pageCount, postListToShow, isLastPost, handlePageClick } = usePagination({ postList });
  // const [loaded, setIsLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content="/images/background.jpg" />
        <meta property="og:description" content="프론트엔드 개발자 신승훈이 직접 개발한 개인 기술 블로그입니다." />
      </Head>
      <Layout>
        <section>
          <Introduce mainImage="/images/background.jpg" />
          <Content>
            <PostLength length={postList.length} />

            <PostList notionList={notionList} />

            {/* <PostList postListToShow={postList} /> */}
          </Content>
        </section>
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

  const instance = new ApiManager<SanityPost[]>(query);
  const postList = await instance.sanityFetch();

  const notionInstance = new NotionService();
  const notionList = await notionInstance.getDatabase();

  return {
    props: {
      postList,
      notionList,
    },
    revalidate: 10,
  };
};

export default HomePage;
