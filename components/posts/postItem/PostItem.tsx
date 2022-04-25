import usePostItem from 'hooks/usePostItem';
import React, { useRef } from 'react';
import { SanityImage, SanityPostBody } from 'ts/interface/post';
import { dateFormat } from 'util/common';
import Link from 'next/link';
import { urlFor } from 'sanity/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CategoryManager from 'util/category';
import styles from './PostItem.module.scss';
import SkeletonItem from './skeleton/SkeletonItem';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { imageUrl, desc, timeToShow } = usePostItem({ mainImage, body, containerRef });
  const categoryInstance = new CategoryManager(category);
  if (!timeToShow) {
    return (
      <div ref={containerRef}>
        <SkeletonItem />
      </div>
    );
  }

  return (
    <Link href={slug} passHref>
      <article className={styles.container}>
        <div className={styles.img_box}>
          <LazyLoadImage effect="blur" src={imageUrl} alt={`${title}의 썸네일 이미지`} />
        </div>
        <div className={styles.content_box}>
          <section className={styles.title} title={title}>
            {title}
          </section>
          <section className={styles.sub}>
            <div className={styles.author}>
              <span className={styles.profile_img}>
                <LazyLoadImage effect="blur" src={urlFor(authorImage).url()} alt="프로필 이미지" />
              </span>
              <span className={styles.name}> By {authorName}</span>
            </div>
            {categoryInstance.categoryColorToShow != null && (
              <div className={styles.category} style={{ backgroundColor: categoryInstance.categoryColorToShow }}>
                {categoryInstance.categoryLetterToShow}
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
