import React from 'react';
import styled from 'styled-components';
import { widths } from 'styles/variables';

interface InnerContainerProps {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: ${widths.maxWidth};
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: ${widths.mobileMax}) {
    padding: 0 3%;
  }
`;

const InnerContainer = ({ children }: InnerContainerProps) => {
  return <Container>{children}</Container>;
};

export default InnerContainer;
