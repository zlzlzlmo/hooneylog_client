import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './PostItemImage.module.scss';

interface PostItemImageProps {
  imageUrl: string;
  title: string;
}

const PostItemImage = ({ imageUrl, title }: PostItemImageProps) => {
  const src = imageUrl === '' ? '/images/default.avif' : imageUrl;
  return (
    <div className={styles.container}>
      <LazyLoadImage effect="blur" src={src} alt={`${title}`} />

      {/* <Image src={src} alt={`${title}`} layout="fill" /> */}
    </div>
  );
};

export default PostItemImage;
