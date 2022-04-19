import React from 'react';
import styles from './Content.module.scss';

const Content: React.FC = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Content;
