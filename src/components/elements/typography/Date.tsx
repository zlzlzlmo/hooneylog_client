import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles/variables';
import DateFormat from 'util/dateFormat/dateFormat';
import { TypographyProps } from '.';

const Container = styled.div<TypographyProps>`
  font-size: 1.3rem;
  color: ${Colors.greyColor};
  margin: ${({ margin }) => margin && margin};
`;

const DateFormatText = (props: TypographyProps) => {
  return <Container {...props}>{new DateFormat(props.children).getKoreaTime()}</Container>;
};

export default DateFormatText;
