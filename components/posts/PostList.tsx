/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { collection, DocumentData, getDoc, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import { fireStore } from 'config/firebase';
import PostItem from './postItem/PostItem';
import styles from './PostList.module.scss';

interface DocData {
  description: string;
  thumbnail: string;
  regDate: any;
  title: string;
}

const PostList = () => {
  const [docSnapShot, setDocSnapShot] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null);
  const test = async () => {
    const querySnapshot = await getDocs(collection(fireStore, 'posts'));
    console.log('querySnapshot.docs : ', querySnapshot.docs);
    setDocSnapShot(querySnapshot.docs);
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <ul className={styles.container}>
      {docSnapShot?.map((doc, index) => {
        const { title, thumbnail, description } = doc.data() as DocData;
        console.log('title : ', title);
        return <PostItem key={index} title={title} thumbnail={thumbnail} desc={description} />;
      })}
    </ul>
  );
};

export default PostList;
