/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from 'sanity/config';
import { DateTimeFormatOptions } from 'ts/interface/date';
import { PostBody } from 'ts/interface/post';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  createAt: string;
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };

  body: PostBody[];
}

const PostItem = ({ title, createAt, mainImage, body }: PostItemProps) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const imgBuilder = imageUrlBuilder(client);

  const urlFor = (source: SanityImageSource) => {
    return imgBuilder.image(source);
  };

  const dateFormat = (dateString: string) => {
    const options: DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    const date = new Date(dateString);

    return date.toLocaleDateString('ko-KR', options);
  };

  useEffect(() => {
    const test = body.filter(({ _type, style }) => {
      return _type === 'block' && style === 'normal';
    });
    const test2 = test.map(({ children }) => {
      return children[0].text;
    });

    setDesc(test2.join(' '));
    console.log('test2 : ', test2.join(' '));
    setImageUrl(urlFor(mainImage).url());
  }, [mainImage]);

  return (
    <li className={styles.container}>
      <div className={styles.content_box}>
        <section className={styles.title}>{title}</section>
        <section className={styles.desc}>{desc.slice(0, 150)}</section>
        <section className={styles.reg_date}>{dateFormat(createAt)}</section>
      </div>
      <div className={styles.img_box}>
        <img src={imageUrl !== '' ? imageUrl : ''} alt="이미지" />
      </div>
    </li>
  );
};

export default PostItem;
