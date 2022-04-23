/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Image from 'next/image';
import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image src="/404.png" width={500} height={200} objectFit="cover" alt="404 image" />
        <div className={styles.text}>Oh! Page not found!</div>
      </div>
    </section>
  );
};

export default NotFound;
