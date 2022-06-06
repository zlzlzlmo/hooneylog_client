import React from 'react';
import styles from './index.module.scss';

interface Props {
  children: string;
}

const FormBtn = ({ children }: Props) => {
  return (
    <button className={styles.btn} type="submit">
      {children}
    </button>
  );
};

export default FormBtn;
