import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

interface Props {
  width: string;
  height: string;
}

const ProfileImage = ({ width, height }: Props) => {
  return (
    <span className={styles.container} style={{ width, height }}>
      <Image src="/images/profile.png" alt="프로필 이미지" layout="fill" />
    </span>
  );
};

export default ProfileImage;
