/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import PostCategoryList from 'components/posts/postCategoryList/PostCategoryList';
import SearchHeader from 'components/search/SearchHeader';
import { useRouter } from 'next/router';
import { SEARCH_PAGE_PATHNAME } from 'ts/constant';
import MobileCategoryFilter from 'components/categoryFilter/mobile/MobileCategoryFilter';
import useIsMobile from 'hooks/useIsMobile';
import styles from './Header.module.scss';

const Header = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <header className={styles.container}>
      <div className={styles.inner_header}>
        <Link href="/" passHref>
          <h1 className={styles.logo}>
            <span>HooneyLog :</span>
          </h1>
        </Link>
        {router.pathname !== SEARCH_PAGE_PATHNAME && (
          <div className={styles.search_box}>
            <SearchHeader />
          </div>
        )}

        {isMobile && <MobileCategoryFilter />}
        {/* <PostCategoryList isMobile /> */}
      </div>
    </header>
  );
};

export default Header;
