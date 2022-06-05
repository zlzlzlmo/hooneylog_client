/* eslint-disable jsx-a11y/anchor-is-valid */
import CreatedDate from 'components/atoms/createdDate';
import LinkToDetail from 'components/atoms/linkToDetail';
import PostDescription from 'components/atoms/postDescription';
import PostImage from 'components/atoms/postImage';
import PostTitle from 'components/atoms/postTitle';
import PostTagList from 'components/molecules/postTagList';
import useElementVisible from 'hooks/useElementVisible';
import Link from 'next/link';
import React, { useRef } from 'react';
import { Tag } from 'ts/interface/notion';
import SingleCategoryManager from 'util/category/singleCategory';
import AbstractFactory from 'util/abstracFactory';
import styles from './index.module.scss';

interface Props {
  title: string;
  createdAt: string;
  id: string;
  category: string;
  description: string;
  tags: Tag[];
}

const PostItem = ({ title, createdAt, id, category, description, tags }: Props) => {
  const articleRef = useRef<HTMLElement>(null);
  const singleCategory = AbstractFactory.createCategory('single', category) as SingleCategoryManager;
  const { timeToShow } = useElementVisible({ articleRef });

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
        <PostTitle postId={id} title={title} fontSize="2rem" />
        <CreatedDate createdAt={createdAt} />
        <PostTagList tags={tags} />
        <PostDescription description={description} />
        <LinkToDetail postId={id} text="Read More" />
      </section>
    </article>
  );
};

export default PostItem;
