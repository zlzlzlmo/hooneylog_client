import Image from 'next/image';
import React from 'react';
import styles from './ProfileImage.module.scss';

const ProfileImage = () => {
  return (
    <span className={styles.container}>
      <Image
        src="/images/profile.jpg"
        alt="프로필 이미지"
        layout="fill"
        placeholder="blur"
        blurDataURL="/images/image-blur-placeholder.avif"
      />
    </span>
  );
};

export default ProfileImage;
