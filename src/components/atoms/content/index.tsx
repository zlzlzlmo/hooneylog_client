import React from 'react';
import styles from './index.module.scss';

interface Props {
  padding?: string;
  children: JSX.Element | JSX.Element[];
}

const Content = ({ padding, children }: Props) => {
  return (
    <div className={styles.container} style={{ padding }}>
      {children}
    </div>
  );
};

export default Content;

Content.defaultProps = {
  padding: '0',
};
