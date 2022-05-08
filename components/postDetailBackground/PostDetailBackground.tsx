/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './PostDetailBackground.module.scss';

interface IntroduceProps {
  imageUrl: string;
}
const Introduce = ({ imageUrl }: IntroduceProps) => {
  const introduceStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return <div className={styles.container} style={introduceStyle} title="introduce_background" />;
};

export default Introduce;
