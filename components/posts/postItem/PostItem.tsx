import usePostItem from 'hooks/usePostItem';
import React, { useRef } from 'react';
import { dateFormat } from 'util/common';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CategoryManager from 'util/category';
import ProfileImage from 'components/common/profileImage/ProfileImage';
import PostItemImage from 'components/common/postItemImage/PostItemImage';
import styles from './PostItem.module.scss';
import SkeletonItem from './skeleton/SkeletonItem';

interface PostItemProps {
  title: string;
  createdAt: string;
  imageUrl: string | null;
  id: string;
  category: string;
  description: string;
}

const PostItem = ({ title, createdAt, imageUrl, id, category, description }: PostItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { timeToShow } = usePostItem({ containerRef });
  const categoryInstance = new CategoryManager(category);

  if (!timeToShow) {
    return (
      <div ref={containerRef}>
        <SkeletonItem />
      </div>
    );
  }

  return (
    <Link href={id} passHref>
      <article className={styles.container}>
        <PostItemImage imageUrl={imageUrl ?? ''} title={title} />

        <div className={styles.content_box}>
          <section className={styles.title} title={title}>
            {title}
          </section>
          <section className={styles.sub}>
            <div className={styles.author}>
              <ProfileImage />
              <span className={styles.name}> By Seunghoon</span>
            </div>
            {categoryInstance.categoryColorToShow != null && (
              <div className={styles.category} style={{ backgroundColor: categoryInstance.categoryColorToShow }}>
                {categoryInstance.categoryLetterToShow}
              </div>
            )}
          </section>
          <p className={styles.desc}>{description}</p>
          <section className={styles.reg_date}>{dateFormat(createdAt)}</section>
        </div>
      </article>
    </Link>
  );
};

export default PostItem;
