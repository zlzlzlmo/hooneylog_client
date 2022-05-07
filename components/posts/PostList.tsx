import useReduxData from 'hooks/useReduxData';
import React, { Fragment } from 'react';
import NotionService from 'util/notion';
import PostItem from './postItem/PostItem';
import styles from './PostList.module.scss';

const PostList = () => {
  const { filteredNotionList } = useReduxData();

  return (
    <section className={styles.container}>
      {filteredNotionList.map(({ id, properties }) => (
        <Fragment key={id}>
          <PostItem
            title={properties.이름.title[0]?.plain_text || ''}
            id={id}
            imageUrl={NotionService.getImageUrl(properties)}
            createdAt={properties.created_date.created_time}
            description={properties.description.rich_text[0]?.plain_text || ''}
            category={properties.category.multi_select[0]?.name || ''}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default PostList;
