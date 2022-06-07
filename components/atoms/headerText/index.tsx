/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styles from './index.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

const HeaderText = ({ text, onClick }: Props) => {
  return (
    <span className={styles.text} onClick={onClick}>
      {text}
    </span>
  );
};

export default HeaderText;
