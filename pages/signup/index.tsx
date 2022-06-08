import SignUp from 'components/organisms/signup';
import Head from 'next/head';
import React from 'react';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
      </Head>
      <SignUp />
      {/* <Home notionList={notionList} /> */}
    </>
  );
};

export default SignUpPage;
