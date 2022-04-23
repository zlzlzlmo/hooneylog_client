import Head from 'next/head';
import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import Introduce from './introduce/Introduce';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="프론트엔드 개발자 신승훈이 직접 개발한 개인 기술 블로그입니다." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
