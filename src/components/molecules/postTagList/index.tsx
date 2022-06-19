import PostTag from 'components/atoms/postTag';
import React, { Fragment } from 'react';
import { Tag } from 'ts/interface/notion';
import styles from './index.module.scss';

interface Props {
  tags: Tag[];
  margin?: string;
}
const PostTagList = ({ tags, margin }: Props) => {
  return (
    <section className={styles.tag_box} style={{ margin }}>
      {tags.map(({ name }) => (
        <Fragment key={name}>
          <PostTag tagName={name} />
        </Fragment>
      ))}
    </section>
  );
};

export default PostTagList;

PostTagList.defaultProps = {
  margin: '0',
};
