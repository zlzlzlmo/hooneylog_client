import HeaderText from 'components/atoms/headerText';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { getCookie, removeCookie } from 'util/cookie';
import styles from './index.module.scss';

const HeaderTextBox = () => {
  const router = useRouter();

  const handleSignUp = useCallback(() => {
    router.push('/signup');
  }, []);

  const handleSignIn = useCallback(() => {
    router.push('/signin');
  }, []);

  const handleSignOut = useCallback(() => {
    removeCookie('jwt');
    router.push('/');
  }, []);

  return (
    <div className={styles.container}>
      {getCookie('jwt') ? (
        <HeaderText text="로그아웃" onClick={handleSignOut} />
      ) : (
        <>
          <HeaderText text="로그인" onClick={handleSignIn} />
          <HeaderText text="회원가입" onClick={handleSignUp} />
        </>
      )}
    </div>
  );
};

export default HeaderTextBox;
