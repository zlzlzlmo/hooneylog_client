/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Content from 'components/atoms/content';
import FormInput from 'components/atoms/formInput';
import FormBtn from 'components/formBtn';
import Layout from 'components/molecules/layout';
import React, { useState } from 'react';
import APIBuilder from 'util/api/builder';
import styles from './index.module.scss';

interface ISignIn {
  id: string;
  password: string;
}

const SignIn = () => {
  const [signIn, setSignIn] = useState<ISignIn>({
    id: '',
    password: '',
  });

  const handleChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sigInBuilder = new APIBuilder('POST', 'auth/signin').setBody(signIn).build();
    const result = await sigInBuilder.fetch();
    console.log(result);
  };

  return (
    <Layout>
      <div>
        <Content padding="2rem 0">
          <div className={styles.container}>
            <h2>로그인</h2>
            <form className={styles.signin_form} onSubmit={handleSubmit}>
              <FormInput type="text" name="id" placeholder="아이디를 입력해주세요." onChange={handleChange} />
              <FormInput
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={handleChange}
              />
              <FormBtn>로그인</FormBtn>
            </form>
          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default SignIn;
