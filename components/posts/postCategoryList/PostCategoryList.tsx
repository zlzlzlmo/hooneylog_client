/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction, useState } from 'react';
import { INotionPost } from 'ts/interface/notion';
import MultipleCategoryManager from 'util/category/multipleCategory';
import SingleCategoryManager from 'util/category/singleCategory';
import styles from './PostCategoryList.module.scss';

interface PostCategoryListProps {
  notionList: INotionPost[];
  setFilteredListToBeShown: Dispatch<SetStateAction<INotionPost[]>>;
}

const PostCategoryList = ({ notionList, setFilteredListToBeShown }: PostCategoryListProps) => {
  const multipleCategoryInstance = new MultipleCategoryManager(notionList);
  const categoryList = [['All', notionList.length], ...multipleCategoryInstance.sortedCountCategoryList];
  const [currentActive, setCurrentActive] = useState(categoryList[0][0]);

  const handleClick = () => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedCategory = e.currentTarget.dataset.category!;
    setCurrentActive(clickedCategory);

    if (clickedCategory === categoryList[0][0]) {
      setFilteredListToBeShown(notionList);
      return;
    }

    const newList = notionList.filter(({ properties }) => {
      const cate = properties.category.multi_select[0].name;
      return cate === clickedCategory.toLowerCase();
    });

    setFilteredListToBeShown(newList);
  };

  return (
    <ul className={styles.container}>
      {categoryList.map((value) => {
        const instance = new SingleCategoryManager(value[0] as string);
        return (
          <li
            key={value[0]}
            className={`${currentActive === instance.categoryLetterToShow && styles.active}`}
            data-category={instance.categoryLetterToShow}
            onClick={handleClick()}
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
