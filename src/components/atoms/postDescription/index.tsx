import React from 'react';
import styles from './index.module.scss';

interface Props {
  description: string;
}

const PostDescription = ({ description }: Props) => {
  return <section className={styles.description}>{description}</section>;
};

export default PostDescription;
