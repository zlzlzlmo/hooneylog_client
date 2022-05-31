/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { dateFormat } from 'util/common';
import SingleCategoryManager from 'util/category/singleCategory';
import 'react-lazy-load-image-component/src/effects/blur.css';
import RenderBlock from 'components/notionSerializer/blockContent/RenderBlock';
import ProfileImage from 'components/common/profileImage/ProfileImage';
import { Tag } from 'ts/interface/notion';
import PostView from 'util/postView';
import API from 'util/api/api';
import { useRouter } from 'next/router';
import styles from './PostDetail.module.scss';

interface PostDetailProps {
  postId: string;
  title: string;
  createdAt: string;
  category: string;
  blocks: [{ id: string }];
  tags: Tag[];
}

const PostDetail = ({ postId, title, createdAt, category, blocks, tags }: PostDetailProps) => {
  const { categoryColorToShow, categoryLetterToShow } = new SingleCategoryManager(category);

  return (
    <article className={styles.container}>
      {categoryColorToShow && (
        <span className={styles.category} style={{ backgroundColor: categoryColorToShow }}>
          {categoryLetterToShow}
        </span>
      )}
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.sub_info}>
        <span className={styles.author}>
          <ProfileImage />
          <span className={styles.name}> By Seunghoon</span>
        </span>
        <span className={styles.reg_date}>- {dateFormat(createdAt)}</span>
      </section>
      <section className={styles.tag_box}>
        {tags.map(({ id, name }) => (
          <Fragment key={id}>
            <div className={styles.tag}>#{name}</div>
          </Fragment>
        ))}
      </section>
      <main className={styles.main_content}>
        {blocks.map((block) => (
          <Fragment key={block.id}>
            <RenderBlock block={block} />
          </Fragment>
        ))}
      </main>
    </article>
  );
};

export default PostDetail;
