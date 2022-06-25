import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { widths, colors } from 'styles/variables';
import { ALL } from 'util/category/category';
import { NotionPost } from 'api/notion/notionApi';
import NotionCategory from 'util/category/notionCategory/notionCategory';
import CategoryQuery from 'util/queryParam/categoryQuery';
import Link from 'next/link';
import CategoryItem from './categoryItem/CategoryItem';

interface CategoryListProps {
  notionList: NotionPost[];
}

const HiddenContainer = styled.div`
  overflow: hidden;
  max-width: ${widths.maxWidth};
  width: 100%;
`;

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  gap: 3rem;
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

const CategoryList = ({ notionList }: CategoryListProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const handleActiveCategory = (category: string) => () => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const categoryQuery = new CategoryQuery();
    if (!categoryQuery.hasCategoryQuery()) return;
    if (!categoryQuery.getCategoryQueryValue()) return;
    setActiveCategory(categoryQuery.getCategoryQueryValue()!);
  }, []);

  return (
    <HiddenContainer>
      <Container>
        {new NotionCategory(notionList).orderedListByDescendingCount.map(([category, count], index) => (
          <Link href={`/search?&category=${category}`} passHref key={index}>
            <a>
              <CategoryItem active={activeCategory === category} handleActiveCategory={handleActiveCategory(category)}>
                {category}({count})
              </CategoryItem>
            </a>
          </Link>
        ))}
      </Container>
    </HiddenContainer>
  );
};

export default CategoryList;
