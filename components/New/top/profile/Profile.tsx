/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';
import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <Image src="/images/profile.png" alt="프로필 이미지" layout="fill" />
      </div>
      <div className={styles.intro_box}>
        <div>
          Written By <span className={styles.name}>@ Seunghoon</span>
        </div>
        <p className={styles.text}>안녕하세요. 프론트엔드 개발자 신승훈입니다.</p>
      </div>
    </div>
  );
};

export default Profile;