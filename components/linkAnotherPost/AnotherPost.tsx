import React from 'react';
import styles from './AnotherPost.module.scss';

const AnotherPost = () => {
  const PreviousPost = () => <div>이전포스트</div>;
  const NextPost = () => <div>이후포스트</div>;
  return { PreviousPost, NextPost };
};

export default AnotherPost;
