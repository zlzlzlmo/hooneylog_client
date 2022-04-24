import React from 'react';
import { SanityPost } from 'ts/interface/post';
import PostItem from './postItem/PostItem';
import styles from './PostList.module.scss';
import SkeletonItem from './postItem/skeleton/SkeletonItem';

interface PostListProps {
  postListToShow: SanityPost[];
}

const PostList = ({ postListToShow }: PostListProps) => {
  return (
    <section className={styles.container}>
      {postListToShow.map(({ title, _createdAt, mainImage, body, slug, author, category, _id }) => (
        <PostItem
          key={_id}
          title={title}
          createAt={_createdAt}
          mainImage={mainImage}
          body={body}
          slug={slug.current}
          authorName={author.name}
          authorImage={author.image}
          category={category}
        />
      ))}
      {/* <SkeletonItem /> */}
    </section>
  );
};

export default PostList;
