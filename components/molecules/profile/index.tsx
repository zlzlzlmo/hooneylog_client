/* eslint-disable react/jsx-no-undef */
import IntroName from 'components/atoms/introName';
import IntroP from 'components/atoms/introP';
import ProfileImage from 'components/atoms/profileImg';
import React from 'react';
import styles from './index.module.scss';

const Profile = () => {
  return (
    <div className={styles.container}>
      <ProfileImage width="7rem" height="7rem" />
      <div className={styles.intro_box}>
        <div>
          Written By <IntroName />
        </div>
        <IntroP />
      </div>
    </div>
  );
};

export default Profile;
