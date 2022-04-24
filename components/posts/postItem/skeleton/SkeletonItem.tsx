import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './SkeletonItem.module.scss';

const SkeletonItem = () => {
  return (
    <div className={styles.skeleton_box}>
      <Skeleton height={200} />
      <Skeleton height={35} style={{ marginTop: '1rem' }} />
      <div className={styles.sub}>
        <div className={styles.author}>
          <Skeleton width={30} height={30} style={{ borderRadius: '50%' }} />
          <Skeleton width={100} height={20} style={{ marginLeft: '1rem' }} />
        </div>
        <Skeleton width={70} height={25} />
      </div>
      <Skeleton height={100} style={{ marginBottom: '3rem' }} />
    </div>
  );
};

export default SkeletonItem;
