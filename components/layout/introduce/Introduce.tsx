import React from 'react';
import styles from './Introduce.module.scss';

const Introduce = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>writing</h1>
      <section className={styles.description}>이곳은 개발 일지를 쓰는 곳입니다.</section>
    </section>
  );
};

export default Introduce;
