/* eslint-disable consistent-return */
import { DateTimeFormatOptions } from 'ts/interface/date';
import { Device } from 'ts/enum';
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

export const getDeviceType = (): Device | undefined => {
  if (typeof window === 'undefined') {
    return;
  }
  const widthSize = window.innerWidth;

  if (widthSize > 1024) {
    return Device.Desktop;
  }
  if (widthSize > 480) {
    return Device.Tablet;
  }

  return Device.Mobile;
};

export const makeTextToFilter = (text: string | undefined): string => {
  if (text === undefined) {
    return '';
  }
  return text.replaceAll(' ', '').toLowerCase();
};

export const getQuerySearchParam = (param: string): string => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const singleCategoryInstance = new SingleCategoryManager(searchParams.get(param) ?? 'All');
    return singleCategoryInstance.categoryLetterToShow ?? 'All';
  }

  return 'All';
};
