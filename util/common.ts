/* eslint-disable import/prefer-default-export */
import { DateTimeFormatOptions } from 'ts/interface/date';

export const dateFormat = (dateString: string): string => {
  // * 2022년 4월 18일 22:22
  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const date = new Date(dateString);

  return date.toLocaleDateString('ko-KR', options);
};
