/* eslint-disable consistent-return */
import { DateTimeFormatOptions } from 'ts/interface/date';
import SingleCategoryManager from 'util/category/singleCategory';

export const dateFormat = (dateString: string) => {
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

export const makeTextToFilter = (text: string | undefined): string => {
  if (text === undefined) {
    return '';
  }
  return text.replaceAll(' ', '').toLowerCase();
};

export const getQuerySearchParam = (param: string): string => {
  if (typeof window !== 'undefined') {
    const singleCategory = new SingleCategoryManager(new URLSearchParams(window.location.search).get(param) ?? 'All');
    return singleCategory.categoryLetterToShow ?? 'All';
  }

  return 'All';
};
