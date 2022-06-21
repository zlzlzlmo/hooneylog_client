/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import { widths, colors } from 'styles/variables';
import CategoryItem from './categoryItem/CategoryItem';

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

const ItemList = [
  { text: 'Typescript', count: 10 },
  { text: 'Javascript', count: 4 },
  { text: 'React', count: 3 },
  { text: 'Next.js', count: 1 },
];

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  return (
    <Container>
      {ItemList.map(({ text }, index) => (
        <CategoryItem key={index} active={activeCategory === text} setActiveCategory={setActiveCategory}>
          {text}
        </CategoryItem>
      ))}
    </Container>
  );
};

export default CategoryList;
