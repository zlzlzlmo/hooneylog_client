/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import { widths, colors } from 'styles/variables';
import Category, { ALL } from 'util/category/category';
import { useRouter } from 'next/router';
import CategoryItem from './categoryItem/CategoryItem';

interface CategoryListProps {
  categories: string[];
}

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  gap: 3rem;
  max-width: ${widths.maxWidth};
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  padding: 2rem;
  border-bottom: 0.1rem solid ${colors.greyColor};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${widths.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const CategoryList = ({ categories }: CategoryListProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const router = useRouter();

  const handleActiveCategory = (category: string) => () => {
    setActiveCategory(category);
    router.push(`/search?&category=${category}`);
  };

  return (
    <Container>
      {new Category(categories).orderedListByDescendingCount.map(([category, count], index) => (
        <CategoryItem
          key={index}
          active={activeCategory === category}
          handleActiveCategory={handleActiveCategory(category)}
        >
          {category}({count})
        </CategoryItem>
      ))}
    </Container>
  );
};

export default CategoryList;
