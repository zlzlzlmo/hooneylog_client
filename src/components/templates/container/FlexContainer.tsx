import React from 'react';
import styled from 'styled-components';

interface FlexContainerProps {
  children: React.ReactNode;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
}

const Container = styled.div<FlexContainerProps>`
  display: flex;
  width: 100%;
  height: ${({ height }) => height && height};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  gap: ${({ gap }) => gap && gap};
`;

const FlexContainer = (props: FlexContainerProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default FlexContainer;
