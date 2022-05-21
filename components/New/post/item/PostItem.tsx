/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unused-prop-types */
import useControlSkeleton from 'hooks/useControlSkeleton';
import useFilter from 'hooks/useFilter';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import SingleCategoryManager from 'util/category/singleCategory';
import { appendQueryString, dateFormat } from 'util/common';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  createdAt: string;
  id: string;
  category: string;
  description: string;
  tag: { id: string; name: string }[];
}
const PostItem = ({ title, createdAt, id, category, description, tag }: PostItemProps) => {
  const router = useRouter();
  const articleRef = useRef<HTMLElement>(null);
  const { timeToShow } = useControlSkeleton({ articleRef });
  const goToDetail = () => router.push(`post/${id}`);
  const { filterByQueryString } = useFilter();

  const handleTagFilter = (tagForFilter: string) => {
    appendQueryString('tag', tagForFilter);
    filterByQueryString();
  };

  if (!timeToShow) {
    return <article className={styles.transparent} ref={articleRef} />;
  }

  return (
    <article className={`${styles.container}`}>
      <section className={styles.img_box}>
        <img src={new SingleCategoryManager(category).categoryImageSrc} alt={category} />
      </section>
      <section className={styles.content}>
        <h2 className={styles.title} onClick={goToDetail}>
          {title}
        </h2>
        <div className={styles.date}>{dateFormat(createdAt)}</div>
        <section className={styles.tag_box}>
          {tag.map(({ name }) => (
            <span className={styles.tag} key={name} onClick={handleTagFilter.bind(null, name)}>
              {name}
            </span>
          ))}
        </section>
        <section className={styles.description}>{description}</section>
        <span className={styles.go_to_detail} onClick={goToDetail}>
          Read More
        </span>
      </section>
    </article>
  );
};

export default PostItem;
