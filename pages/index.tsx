/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/extensions */
import Layout from 'components/layout/Layout';
import PostList from 'components/posts/PostList';
import { Post } from 'ts/interface/post';
import Pagination from 'components/common/pagination/Pagintation';
import Content from 'components/layout/content/Content';
import Introduce from 'components/layout/introduce/Introduce';

interface HomePageProps {
  postList: Post[];
}
const HomePage = ({ postList }: HomePageProps) => {
  return (
    <div>
      <Layout>
        <Introduce mainImage="/images/background.jpg" />
        <Content>
          <PostList postList={postList} />
          <Pagination pageCount={10} handlePageClick={(data) => {}} />
        </Content>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = encodeURIComponent(`*[_type=="post"]`);
  const res = await fetch(`https://e5m09ops.api.sanity.io/v2021-10-21/data/query/production?query=${query}`);
  const result = await res.json();
  const postList = result.result;

  return {
    props: {
      postList,
    },
  };
};

export default HomePage;
