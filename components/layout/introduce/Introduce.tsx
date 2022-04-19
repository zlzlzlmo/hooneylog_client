import React from 'react';
import styles from './Introduce.module.scss';

const Introduce = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>안녕하세요. 프론트엔드 개발자 신승훈입니다</div>
      {/* <h1 className={styles.title}>writing</h1>
      <section className={styles.description}>이곳은 개발 일지를 쓰는 곳입니다.</section> */}
    </section>
  );
};

export default Introduce;
