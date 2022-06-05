/* eslint-disable jsx-a11y/anchor-is-valid */
import CreatedDate from 'components/atoms/createdDate';
import LinkToDetail from 'components/atoms/linkToDetail';
import PostDescription from 'components/atoms/postDescription';
import PostImage from 'components/atoms/postImage';
import PostTag from 'components/atoms/postTag';
import PostTitle from 'components/atoms/postTitle';
import useControlSkeleton from 'hooks/useControlSkeleton';
import Link from 'next/link';
import React, { Fragment, useRef } from 'react';
import { Tag } from 'ts/interface/notion';
import SingleCategoryManager from 'util/category/singleCategory';
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

  if (!timeToShow) {
    return (
      <Link href={`post/${id}`} passHref>
        <a>
          <article className={styles.transparent} ref={articleRef} />{' '}
        </a>
      </Link>
    );
  }

  return (
    <article className={`${styles.container}`}>
      <PostImage width="100%" src={singleCategory.categoryImageSrc} alt={category} />
      <section className={styles.content}>
        <PostTitle postId={id} title={title} />
        <CreatedDate createdAt={createdAt} />
        <section className={styles.tag_box}>
          {tags.map(({ name }) => (
            <Fragment key={name}>
              <PostTag tagName={name} />
            </Fragment>
          ))}
        </section>
        <PostDescription description={description} />
        <LinkToDetail postId={id} text="Read More!" />
      </section>
    </article>
  );
};

export default PostItem;
