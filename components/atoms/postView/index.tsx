/* eslint-disable react/jsx-no-useless-fragment */
import useApi from 'hooks/useApi';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  postId: string;
}
const PostView = ({ postId }: Props) => {
  const { data } = useApi<number>('post/view', {
    postId,
  });

  if (!data) {
    return <></>;
  }

  return <span className={styles.view}>조회수 : {data}</span>;
};

export default PostView;
