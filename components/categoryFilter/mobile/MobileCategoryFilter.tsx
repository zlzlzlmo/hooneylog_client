/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import SearchHeader from 'components/search/SearchHeader';
import useReduxData from 'hooks/useReduxData';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import MultipleCategoryManager from 'util/category/multipleCategory';
import styles from './MobileCategoryFilter.module.scss';

type BurgerStatus = 'open' | 'close';

const MobileCategoryFilter = () => {
  const { originalNotionList } = useReduxData();
  const [clickedBurger, setClickedBurger] = useState<boolean>(false);

  const handleClickBurger = (status: BurgerStatus) => () => {
    if (status === 'open') {
      setClickedBurger(true);
    } else if (status === 'close') {
      setClickedBurger(false);
    }
  };

  return (
    <div className={styles.mobile_container} role="categoryFilter">
      <div onClick={handleClickBurger('open')} role="hamburger">
        <GiHamburgerMenu />
      </div>
      <div className={`${styles.background} ${clickedBurger && styles.active}`} role="popup">
        <SearchHeader />

        <div className={styles.list}>
          {new MultipleCategoryManager(originalNotionList).sortedCountCategoryList.map(([category, count]) => (
            <span key={category}>
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
