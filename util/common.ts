/* eslint-disable consistent-return */
import { DateTimeFormatOptions } from 'ts/interface/date';
import { Device } from 'ts/enum';
import { categries } from 'ts/type';

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

export const makeCategoryLetter = (category: string) => {
  const str = category.toLowerCase();
  const result = str.charAt(0).toUpperCase() + str.slice(1);
  return result;
};

export const makeCategoryColor = (category: string) => {
  const categoryColor = categries.find(({ language }) => language.toLowerCase() === category.toLowerCase())?.color;

  return categoryColor;
};
