import SearchedPostLength from 'components/atoms/searchedPostLength';
import CategoryFilter from 'components/categoryFilter/desktop/CategoryFilter';
import Filtered from 'components/filtered/Filtered';
import useReduxData from 'hooks/useReduxData';
import React, { Fragment } from 'react';
import PostItem from '../item/PostItem';
import styles from './PostList.module.scss';

const PostList = () => {
  const { filteredNotionList } = useReduxData();
  return (
    <main className={styles.container}>
      <div>
        <CategoryFilter />
        <SearchedPostLength length={filteredNotionList.length} />
        <Filtered />
      </div>
      {filteredNotionList.map(({ id, title, createdAt, description, category, tags }) => (
        <Fragment key={id}>
          <PostItem
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

export default PostList;
