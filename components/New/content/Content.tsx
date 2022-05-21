import React from 'react';
import styles from './Content.module.scss';

const Content: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Content;
