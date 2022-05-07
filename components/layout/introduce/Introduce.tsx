/* eslint-disable react/no-unescaped-entities */
import useIntroduce from 'hooks/components/useIntroduce';
import React from 'react';
import styles from './Introduce.module.scss';

interface IntroduceProps {
  mainImage: string;
}
const Introduce = ({ mainImage }: IntroduceProps) => {
  const { imageUrl, isHome } = useIntroduce({ mainImage });

  const introduceStyle = {
    backgroundImage: `url(${imageUrl})`,
    height: `${isHome ? '40vh' : '20rem'}`,
  };

  return (
    <div className={styles.container} style={introduceStyle}>
      {isHome && (
        <div className={styles.intro_box}>
          <span className={styles.text_top}>Welcome!</span>
          <span className={styles.text_bottom}>
            This is <strong>Hooney's</strong> Tech Blog
          </span>
        </div>
      )}
    </div>
  );
};

export default Introduce;
