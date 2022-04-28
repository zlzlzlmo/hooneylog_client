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
      <Image src={src} alt={`${title}의 이미지`} layout="fill" />
    </div>
  );
};

export default PostItemImage;
