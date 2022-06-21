import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

type CategoryItemStyle = {
  color?: string;
  active?: boolean;
};

interface CategoryItemProps {
  children: React.ReactNode;
  active: boolean;
  handleActiveCategory: () => void;
}

const Container = styled.li<CategoryItemStyle>`
  white-space: nowrap;
  cursor: pointer;
  color: ${({ active }) => (active ? colors.subColor : colors.greyColor)};
  font-weight: 700;
`;

const CategoryItem = ({ children, active, handleActiveCategory }: CategoryItemProps) => {
  return (
    <Container onClick={handleActiveCategory} active={active}>
      {children}
    </Container>
  );
};

export default CategoryItem;
