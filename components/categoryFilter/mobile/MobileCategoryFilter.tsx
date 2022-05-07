/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import SearchHeader from 'components/search/SearchHeader';
import useCategoryFilter from 'hooks/useCategoryFilter';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import styles from './MobileCategoryFilter.module.scss';

type BurgerStatus = 'open' | 'close';

const MobileCategoryFilter = () => {
  const [clickedBurger, setClickedBurger] = useState<boolean>(false);
  const { categoryListToShow, routerPushFor } = useCategoryFilter();

  const handleClickBurger = (status: BurgerStatus) => () => {
    if (status === 'open') {
      setClickedBurger(true);
    } else if (status === 'close') {
      setClickedBurger(false);
    }
  };

  const handleClickCategory = (category: string) => () => {
    setClickedBurger(false);
    routerPushFor(category);
  };

  return (
    <div className={styles.mobile_container} role="categoryFilter">
      <div onClick={handleClickBurger('open')} role="hamburger">
        <GiHamburgerMenu />
      </div>
      <div className={`${styles.background} ${clickedBurger && styles.active}`} role="popup">
        <SearchHeader />

        <div className={styles.list}>
          {categoryListToShow.map(([category, count]) => (
            <span key={category} onClick={handleClickCategory(category)}>
              {category}
              <span className={styles.count}>({count})</span>
            </span>
          ))}
        </div>

        <div onClick={handleClickBurger('close')} role="closePopup">
          <GrClose className={styles.close} />
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryFilter;
