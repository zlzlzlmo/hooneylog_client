/* eslint-disable @next/next/no-document-import-in-page */
import SignIn from 'components/organisms/signIn';
import Head from 'next/head';
import React from 'react';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Hooney Blog</title>
        <meta property="og:image" content={BACKGROUND_MAIN_IMAGE} />
      </Head>
      <SignIn />
      {/* <Home notionList={notionList} /> */}
    </>
  );
};

export default SignInPage;
