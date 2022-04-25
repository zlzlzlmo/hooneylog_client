import React from 'react';
import Script from 'next/script';

interface FbCommentProps {
  slug: string;
}

const FbComment = ({ slug }: FbCommentProps) => {
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
        data-href={`https://hoonie-blog.vercel.app/${slug}`}
        data-numposts="5"
        data-width="100%"
        data-lazy="true"
      />{' '}
    </>
  );
};

export default FbComment;
