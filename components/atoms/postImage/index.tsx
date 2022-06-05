import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  width: string;
  src: string;
  alt: string;
}

const PostImage = ({ width, src, alt }: Props) => {
  return (
    <section className={styles.img_box} style={{ width }}>
      <Image src={src} alt={alt} layout="fill" />
    </section>
  );
};

export default PostImage;
