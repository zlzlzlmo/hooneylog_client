/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/default-props-match-prop-types */
import useIntroduce from 'hooks/useIntroduce';
import React from 'react';
import { SanityImage } from 'ts/interface/post';
import styles from './Introduce.module.scss';

interface IntroduceProps {
  mainImage: SanityImage | string;
}
const Introduce = ({ mainImage }: IntroduceProps) => {
  const { imageUrl, isHome } = useIntroduce({ mainImage });

  const introduceStyle = {
    backgroundImage: `url(${imageUrl})`,
    height: `${isHome ? '40vh' : '20rem'}`,
  };

  return (
    <section className={styles.container} style={introduceStyle}>
      {isHome && (
        <div className={styles.intro_box}>
          <span className={styles.text_top}>Welcome!</span>
          <span className={styles.text_bottom}>
            This is <strong>Hooney's</strong> Tech Blog
          </span>
        </div>
      )}
    </section>
  );
};

export default Introduce;
