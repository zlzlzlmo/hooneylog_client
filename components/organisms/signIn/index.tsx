/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Content from 'components/atoms/content';
import Layout from 'components/molecules/layout';
import React from 'react';
import styles from './index.module.scss';

const SignIn = () => {
  return (
    <Layout>
      <div>
        <Content padding="2rem 0">
          <div className={styles.container}>
            <h2>로그인</h2>
            <form className={styles.signin_form}>
              <input type="text" placeholder="아이디를 입력하세요" />
              <input type="password" placeholder="비밀번호를 입력하세요" />
              <button className={styles.login_btn} type="submit">
                로그인 하기
              </button>
            </form>
          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default SignIn;
