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
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: `${isHome ? '30vh' : '20rem'}`,
  };
  return (
    <section className={styles.container} style={introduceStyle}>
      {isHome && <div className={styles.text}>{title}</div>}
    </section>
  );
};

Introduce.defaultProps = {
  title: '안녕하세요! 프론트엔드 개발자, 신승훈입니다 :)',
};
export default Introduce;
