/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import DateFormat from 'util/dateFormat/dateFormat';
import { TypographyProps } from '.';

const Container = styled.div`
  font-size: 1.3rem;
  color: ${colors.greyColor};
`;

const DateFormatText = (props: TypographyProps) => {
  return <Container>{new DateFormat(props.children).getKoreaTime()}</Container>;
};

export default DateFormatText;
