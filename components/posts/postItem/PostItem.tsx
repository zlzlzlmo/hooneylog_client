/* eslint-disable @next/next/link-passhref */
/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import usePostItem from 'hooks/usePostItem';
import React from 'react';
import { SanityImage, SanityPostBody } from 'ts/interface/post';
import { dateFormat, makeCategoryColor, makeCategoryLetter } from 'util/common';
import Link from 'next/link';
import { urlFor } from 'sanity/config';
import { categries } from 'ts/type';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  createAt: string;
  mainImage: SanityImage;
  body: SanityPostBody[];
  slug: string;
  authorName: string;
  authorImage: object;
  category: string;
}

const PostItem = ({ title, createAt, mainImage, body, slug, authorName, authorImage, category }: PostItemProps) => {
  const { imageUrl, desc } = usePostItem({ mainImage, body });
  return (
    <Link href={slug}>
      <article className={styles.container}>
        <div className={styles.img_box}>
          <img src={imageUrl !== '' ? imageUrl : ''} alt="메인 이미지" />
        </div>
        <div className={styles.content_box}>
          <section className={styles.title}>{title}</section>
          <section className={styles.sub}>
            <div className={styles.author}>
              <span className={styles.profile_img}>
                <img src={urlFor(authorImage).url()} alt="프로필 이미지" />
              </span>
              <span className={styles.name}> By {authorName}</span>
            </div>
            {makeCategoryColor(category) != null && (
              <div className={styles.category} style={{ backgroundColor: makeCategoryColor(category) }}>
                {makeCategoryLetter(category)}
              </div>
            )}
          </section>
          <p className={styles.desc}>{desc}</p>
          <section className={styles.reg_date}>{dateFormat(createAt)}</section>
        </div>
      </article>
    </Link>
  );
};

export default PostItem;
