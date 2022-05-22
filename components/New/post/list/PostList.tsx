import CategoryFilter from 'components/categoryFilter/desktop/CategoryFilter';
import PostLength from 'components/common/PostLength/PostLength';
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
        <PostLength length={filteredNotionList.length} />
        <Filtered />
      </div>
      {filteredNotionList.map(({ id, properties }) => (
        <Fragment key={id}>
          <PostItem
            id={id}
            title={properties.이름.title[0]?.plain_text || ''}
            createdAt={properties.created_date.created_time}
            description={properties.description.rich_text[0]?.plain_text || ''}
            category={properties.category.multi_select[0]?.name || ''}
            tag={properties.tag.multi_select}
          />
        </Fragment>
      ))}
    </main>
  );
};

export default PostList;
