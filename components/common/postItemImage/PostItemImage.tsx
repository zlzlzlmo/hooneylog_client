/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './PostItemImage.module.scss';

interface PostItemImageProps {
  imageUrl: string;
  title: string;
}

const PostItemImage = ({ imageUrl, title }: PostItemImageProps) => {
  const src = imageUrl === '' ? '/images/default.avif' : imageUrl;
  return (
    <div className={styles.container}>
      <img src={src} alt={`${title}`} />
    </div>
  );
};

export default PostItemImage;
