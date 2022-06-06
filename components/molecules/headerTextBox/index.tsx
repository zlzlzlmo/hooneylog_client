import HeaderText from 'components/atoms/headerText';
import React from 'react';
import styles from './index.module.scss';

const HeaderTextBox = () => {
  return (
    <div className={styles.container}>
      <HeaderText text="로그인" />
      <HeaderText text="회원가입" />
    </div>
  );
};

export default HeaderTextBox;
