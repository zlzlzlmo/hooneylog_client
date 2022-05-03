import Image from 'next/image';
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
      {/* <img src={src} alt={`${title}`} /> */}
      {/* <LazyLoadImage effect="blur" src={src} alt={`${title}`} /> */}

      <Image src={src} alt={`${title}`} layout="fill" unoptimized />
    </div>
  );
};

export default PostItemImage;
