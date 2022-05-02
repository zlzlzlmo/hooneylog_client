/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import SearchHeader from 'components/search/SearchHeader';
import usePostCategoryList from 'hooks/usePostCategoryList';
import { useRouter } from 'next/router';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { SEARCH_PAGE_PATHNAME } from 'ts/constant';
import SingleCategoryManager from 'util/category/singleCategory';
import styles from './PostCategoryList.module.scss';

interface PostCategoryListProps {
  isMobile: boolean;
}

const PostCategoryList = ({ isMobile }: PostCategoryListProps) => {
  const router = useRouter();
  const { currentActive, categoryList, burger, handleFilterClick, handleBurgerControl } = usePostCategoryList();

  if (router.pathname === SEARCH_PAGE_PATHNAME) {
    return <></>;
  }

  if (isMobile) {
    return (
      <div className={styles.mobile_container} onClick={handleBurgerControl(false)}>
        <div onClick={handleBurgerControl(true)}>
          <GiHamburgerMenu />
        </div>
        <div className={`${styles.background} ${burger && styles.active}`}>
          <SearchHeader />

          <>
            <div className={styles.list}>
              {categoryList.map((value) => {
                const instance = new SingleCategoryManager(value[0] as string);
                return (
                  <span
                    key={value[0]}
                    className={`${currentActive === instance.categoryLetterToShow && styles.active}`}
                    data-category={instance.categoryLetterToShow}
                    onClick={handleFilterClick()}
                  >
                    {instance.categoryLetterToShow}
                    <span className={styles.count}>({value[1]})</span>
                  </span>
                );
              })}
            </div>
          </>

          <div onClick={handleBurgerControl(false)}>
            <GrClose className={styles.close} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className={styles.container}>
      {categoryList.map((value) => {
        const instance = new SingleCategoryManager(value[0] as string);
        return (
          <li
            key={value[0]}
            className={`${currentActive === instance.categoryLetterToShow && styles.active}`}
            data-category={instance.categoryLetterToShow}
            onClick={handleFilterClick()}
          >
            {instance.categoryLetterToShow}
            <span className={styles.count}>({value[1]})</span>
          </li>
        );
      })}
    </ul>
  );
};

export default PostCategoryList;
