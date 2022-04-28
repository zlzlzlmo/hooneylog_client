import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="후니로그" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hooneylog.com" />
          <meta property="og:locale" content="ko_KR" />
          <meta name="google-site-verification" content="uTxOPNaU5TsgLGH-7rdPqKlIJNF-fNwBpt7wqNh4dzE" />
          <meta name="naver-site-verification" content="686eaa1f9c78319feeae7ca95ca2f5a82451cc8a" />
          <meta name="description" content="프론트엔드 개발자 신승훈이 직접 개발한 개인 기술 블로그입니다." />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
