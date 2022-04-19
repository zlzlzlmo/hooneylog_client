/* eslint-disable react/default-props-match-prop-types */
import useIntroduce from 'hooks/useIntroduce';
import React from 'react';
import { SanityImage } from 'ts/interface/post';
import styles from './Introduce.module.scss';

interface IntroduceProps {
  title?: string;
  mainImage: SanityImage | string;
}
const Introduce = ({ title, mainImage }: IntroduceProps) => {
  const { imageUrl, isHome } = useIntroduce({ mainImage });

  const introduceStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.5) 100%),url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: `${isHome ? '50rem' : '35rem'}`,
  };
  return (
    <section className={styles.container} style={introduceStyle}>
      <div className={`${isHome ? styles.text : styles.slug_text}`}>{title}</div>
    </section>
  );
};

Introduce.defaultProps = {
  title: '안녕하세요! 프론트엔드 개발자, 신승훈입니다 :)',
};
export default Introduce;
