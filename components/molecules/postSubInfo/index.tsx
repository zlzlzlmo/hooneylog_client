import CreatedDate from 'components/atoms/createdDate';
import ProfileImage from 'components/atoms/profileImg';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  createdAt: string;
}

const PostSubInfo = ({ createdAt }: Props) => {
  return (
    <section className={styles.sub_info}>
      <span className={styles.author}>
        <ProfileImage width="3rem" height="3rem" />
        <span className={styles.name}> By Seunghoon</span>
      </span>
      <CreatedDate createdAt={createdAt} />
    </section>
  );
};

export default PostSubInfo;
