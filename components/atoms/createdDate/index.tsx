import React from 'react';
import { dateFormat } from 'util/common';
import styles from './index.module.scss';

interface Props {
  createdAt: string;
}

const CreatedDate = ({ createdAt }: Props) => {
  return <div className={styles.date}>{dateFormat(createdAt)}</div>;
};

export default CreatedDate;
