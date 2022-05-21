/* eslint-disable import/prefer-default-export */
import { DateTimeFormatOptions } from 'ts/interface/date';
import { QueryParamType } from 'ts/type';

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

export const appendQueryString = (queryParam: QueryParamType, type: string) => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);

    // 카테고리하고 태그는 중복 필터 안되게
    if (queryParam === 'category') {
      searchParams.delete('tag');
    }

    if (queryParam === 'tag') {
      searchParams.delete('category');
    }

    searchParams.set(queryParam, type);
    window.history.pushState({}, '', `${window.location.origin}?${searchParams}`);
  }
};

export const queryParamFor = (queryParam: QueryParamType) => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(queryParam);
  }
  return '';
};
