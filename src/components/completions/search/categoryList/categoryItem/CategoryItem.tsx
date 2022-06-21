import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

type CategoryItemStyle = {
  color?: string;
  active?: boolean;
};

interface CategoryItemProps {
  children: string;
  active: boolean;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.li<CategoryItemStyle>`
  white-space: nowrap;
  cursor: pointer;
  color: ${({ active }) => (active ? colors.subColor : colors.greyColor)};
  font-weight: 700;
`;

const CategoryItem = ({ children, active, setActiveCategory }: CategoryItemProps) => {
  return (
    <Container onClick={() => setActiveCategory(children)} active={active}>
      {children}
    </Container>
  );
};

export default CategoryItem;
