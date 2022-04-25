import React, { useEffect, useRef } from 'react';
// import { has } from 'lodash/object';
import { SingletonRouter } from 'next/router';
import Script from 'next/script';

interface IProps {
  router: SingletonRouter;
}

const FbComment = () => {
  const fbRef = useRef(null);
  //   useEffect(() => {
  //     if (global.document && has(global.window, 'FB')) {
  //       global.FB.XFBML.parse(fbRef.current);
  //     }
  //   }, []);
  return (
    <>
      <Script
        src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v13.0"
        async
        defer
        crossOrigin="anonymous"
        nonce="bzUdGJRA"
      />
      <div id="fb-root" />
      <div
        className="fb-comments"
        data-href="https://hoonie-blog.vercel.app/react-testing-library-simple-code/"
        data-width="200"
        data-numposts="5"
      />{' '}
    </>
  );
};

export default FbComment;
