/* eslint-disable import/named */
import React from 'react';
import styled from 'styled-components';
import { Width } from 'styles/variables';

interface InnerContainerProps {
  width?: string;
  children: React.ReactNode;
}

const Container = styled.div<InnerContainerProps>`
  max-width: ${Width.maxWidth};
  width: ${({ width }) => width || '100vw'};
  height: 100%;
  margin: 0 auto;

  @media (max-width: ${Width.mobileMax}) {
    padding: 0 3%;
  }
`;

const InnerContainer = (props: InnerContainerProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default InnerContainer;
