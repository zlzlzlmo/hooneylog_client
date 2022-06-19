import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const Input = styled.input`
  height: 4.5rem;
  border-radius: 0.5rem;
  width: 83%;
  padding: 0 2rem;
  border: 0.1rem solid ${colors.subColor};
`;

const BasicInput = () => {
  return <Input />;
};

export default BasicInput;
