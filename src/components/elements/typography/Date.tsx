/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import { dateFormat } from 'util/common';
import { TypographyProps } from '.';

const Container = styled.div`
  font-size: 1.3rem;
  color: ${colors.greyColor};
`;

const DateFormatText = (props: TypographyProps) => {
  return <Container>{dateFormat(props.children)}</Container>;
};

export default DateFormatText;
