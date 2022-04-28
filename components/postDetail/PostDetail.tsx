import React, { Fragment } from 'react';
import { dateFormat } from 'util/common';
import CategoryManager from 'util/category';
import 'react-lazy-load-image-component/src/effects/blur.css';
import RenderBlock from 'components/notionSerializer/blockContent/RenderBlock';
import ProfileImage from 'components/common/profileImage/ProfileImage';
import styles from './PostDetail.module.scss';

interface PostDetailProps {
  title: string;
  createdAt: string;
  category: string;
  blocks: [{ id: string }];
  tag: [{ id: string; name: string }];
}

const PostDetail = ({ title, createdAt, category, blocks, tag }: PostDetailProps) => {
  const categoryInstance = new CategoryManager(category);
  return (
    <article className={styles.container}>
      {categoryInstance.categoryColorToShow && (
        <span className={styles.category} style={{ backgroundColor: categoryInstance.categoryColorToShow }}>
          {categoryInstance.categoryLetterToShow}
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
        {tag.map(({ id, name }) => (
          <Fragment key={id}>
            <div className={styles.tag}>#{name}</div>
          </Fragment>
        ))}
      </section>
      <main className={styles.main_content}>
        {blocks.map((block) => (
          <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
        ))}
      </main>
    </article>
  );
};

export default PostDetail;
