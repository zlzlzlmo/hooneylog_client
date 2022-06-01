/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unused-prop-types */
import useControlSkeleton from 'hooks/useControlSkeleton';
import useFilter from 'hooks/useFilter';
import Link from 'next/link';
import React, { useRef } from 'react';
import { Tag } from 'ts/interface/notion';
import SingleCategoryManager from 'util/category/singleCategory';
import { appendQueryString, dateFormat } from 'util/common';
import AbstractFactory from 'util/factory/abstractFactory';
import styles from './PostItem.module.scss';

interface PostItemProps {
  title: string;
  createdAt: string;
  id: string;
  category: string;
  description: string;
  tags: Tag[];
}
const PostItem = ({ title, createdAt, id, category, description, tags }: PostItemProps) => {
  const articleRef = useRef<HTMLElement>(null);
  const singleCategory = AbstractFactory.createCategory('single', category) as SingleCategoryManager;
  const { timeToShow } = useControlSkeleton({ articleRef });
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
        <img src={singleCategory.categoryImageSrc} alt={category} />
      </section>
      <section className={styles.content}>
        <Link href={`post/${id}`} passHref>
          <a>
            <h2 className={styles.title}>{title}</h2>
          </a>
        </Link>
        <div className={styles.date}>{dateFormat(createdAt)}</div>
        <section className={styles.tag_box}>
          {tags.map(({ name }) => (
            <span className={styles.tag} key={name} onClick={handleTagFilter.bind(null, name)}>
              {name}
            </span>
          ))}
        </section>
        <section className={styles.description}>{description}</section>
        <Link href={`post/${id}`} passHref>
          <a>
            <span className={styles.go_to_detail}>Read More</span>
          </a>
        </Link>
      </section>
    </article>
  );
};

export default PostItem;
