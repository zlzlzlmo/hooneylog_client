import useIntroduce from 'hooks/useIntroduce';
import React from 'react';
import { SanityImage } from 'ts/interface/post';
import styles from './Introduce.module.scss';

interface IntroduceProps {
  mainImage: SanityImage | string;
}
const Introduce = ({ mainImage }: IntroduceProps) => {
  const { imageUrl, isHome } = useIntroduce({ mainImage });

  return (
    <section className={styles.container} style={{ backgroundImage: `url(${imageUrl})`, height: `${isHome ? '50rem' : '35rem'}` }}>
      {isHome && <div className={styles.text}>안녕하세요! 프론트엔드 개발자, 신승훈입니다 :)</div>}
    </section>
  );
};

export default Introduce;
