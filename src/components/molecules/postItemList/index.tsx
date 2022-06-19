import SearchedPostLength from 'components/atoms/searchedPostLength';
import PostItemCard from 'components/molecules/postItemCard';
import useReduxData from 'hooks/useReduxData';
import React, { Fragment } from 'react';
import CategoryList from '../categoryList';
import FilteredTypeList from '../filteredTypeList';
import styles from './index.module.scss';

const PostItemList = () => {
  const { filteredNotionList } = useReduxData();
  return (
    <main className={styles.container}>
      <div>
        <CategoryList />
        <SearchedPostLength length={filteredNotionList.length} />
        <FilteredTypeList />
      </div>
      {filteredNotionList.map(({ id, title, createdAt, description, category, tags }) => (
        <Fragment key={id}>
          <PostItemCard
            id={id}
            title={title}
            createdAt={createdAt}
            description={description}
            category={category}
            tags={tags}
          />
        </Fragment>
      ))}
    </main>
  );
};

export default PostItemList;
