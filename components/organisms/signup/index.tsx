/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { CircularProgress } from '@mui/material';
import Content from 'components/atoms/content';
import FormInput from 'components/atoms/formInput';
import FormBtn from 'components/formBtn';
import Layout from 'components/molecules/layout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import APIBuilder from 'util/api/builder';
import { setCookie } from 'util/cookie';
import styles from './index.module.scss';

interface SignInResponse {
  message: string;
  token: string;
}

interface ISignUp {
  id: string;
  nickName: string;
  password: string;
}

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [signUp, setSignUp] = useState<ISignUp>({
    id: '',
    nickName: '',
    password: '',
  });

  const handleChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const token = async () => {
    const sigInBuilder = new APIBuilder<SignInResponse>('POST', 'auth/signin').setBody(signUp).build();
    const result = await sigInBuilder.fetch();
    return result.token;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setCookie('jwt', await token(), {
      path: '/',
      secure: true,
      sameSite: 'none',
    });
    setLoading(false);
    router.push('/');
  };

  return (
    <Layout>
      <div>
        <Content padding="2rem 0">
          <div className={styles.container}>
            <h2>회원가입</h2>
            <form className={styles.signin_form} onSubmit={handleSubmit}>
              <FormInput type="text" name="id" placeholder="아이디를 입력해주세요." onChange={handleChange} />
              <FormInput type="text" name="nickName" placeholder="닉네임을 입력해주세요." onChange={handleChange} />
              <FormInput
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={handleChange}
              />
              <FormBtn>{!loading ? '로그인' : <CircularProgress size={16} color="inherit" />}</FormBtn>
            </form>
          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default SignUp;
