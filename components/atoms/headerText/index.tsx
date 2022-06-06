import React from 'react';
import styles from './index.module.scss';

interface Props {
  text: string;
}

const HeaderText = ({ text }: Props) => {
  return <span className={styles.text}>{text}</span>;
};

export default HeaderText;
