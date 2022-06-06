/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styles from './index.module.scss';

interface Props {
  text: string;
}

const HeaderText = ({ text }: Props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push('/signin');
  }, []);

  return (
    <span className={styles.text} onClick={handleClick}>
      {text}
    </span>
  );
};

export default HeaderText;
