import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const Container = styled.footer`
  width: 100%;
  background-color: ${colors.black26};
  color: ${colors.whiteColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return <Container>Copyright © made by seunghoon</Container>;
};

export default Footer;
