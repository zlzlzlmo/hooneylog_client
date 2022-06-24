import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import { ButtonProps } from '.';

const Button = styled.button`
  background-color: ${colors.mainColor};
  border: none;
  padding: 2rem;
`;

const BasicButton = (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default BasicButton;
