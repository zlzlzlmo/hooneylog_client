/* eslint-disable react-hooks/rules-of-hooks */
import Layout from 'components/layout/Layout';
import Search from 'components/search/Search';
import Head from 'next/head';
import React, { ChangeEvent, useState } from 'react';
import { sanityClient } from 'sanity/config';
import ApiManager from 'util/api';
import { debounce } from 'lodash';
import PostLength from 'components/common/PostLength/PostLength';
import Content from 'components/layout/content/Content';
import PostList from 'components/posts/PostList';
import { SanityPost } from 'ts/interface/post';

const search = () => {
  const [postList, setPostList] = useState<SanityPost[]>([]);

  const handleChange = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    const query = `
      *[_type=="post" && (title match "${e.target.value}" || body[].children[].text match "${e.target.value}")]
      {
          _id,
          title,
          author->{
          name,
          image
          },
          mainImage,
          slug,
          body,
          category,
          _createdAt
        } | order(_createdAt desc)

      `;
    const result = await sanityClient.fetch<SanityPost[]>(query);
    setPostList(result);
  }, 300);

  return (
    <>
      <Head>
        <title>Hooney Blog</title>
      </Head>
      <Layout>
        <div>
          <Search handleChange={handleChange} />
          <Content>
            <PostLength length={postList.length} />
            <PostList postListToShow={postList} />
          </Content>
        </div>
      </Layout>
    </>
  );
};

// *[_type=="post" && (title match "ㅇㅇㅇ" || body[].children[].text match "SIT")][0...6]{
//     _createdAt,
//     _id,
//     author-> {
//     name,image
//    },
//   body,
//   mainImage,
//   slug,
//   title,
//   category
//   }

export default search;
