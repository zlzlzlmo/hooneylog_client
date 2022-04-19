/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/extensions */
import Layout from 'components/layout/Layout';
import PostList from 'components/posts/PostList';
import { Post } from 'ts/interface/post';
import Pagination from 'components/common/pagination/Pagintation';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';
import ApiManager from 'util/api';
import usePagination from 'hooks/usePagination';

interface HomePageProps {
  postList: Post[];
}
const HomePage = ({ postList }: HomePageProps) => {
  const { pageCount, postListToShow, handlePageClick } = usePagination({ postList });

  return (
    <div>
      <Layout>
        <Introduce mainImage="/images/background.jpg" />
        <Content>
          <PostList postList={postListToShow} />
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Content>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const api = new ApiManager<Post[]>(`*[_type=="post"]`);

  const result = api.SanityFetch();
  const postList = (await result).result;

  return {
    props: {
      postList,
    },
    revalidate: 10,
  };
};

export default HomePage;
