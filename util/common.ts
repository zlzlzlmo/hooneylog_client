/* eslint-disable consistent-return */
import { DateTimeFormatOptions } from 'ts/interface/date';
import { Device } from 'ts/enum';

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

export const makeTextToFilter = (text: string | undefined) => {
  if (text === undefined) {
    return '';
  }
  return text.replaceAll(' ', '').toLowerCase();
};
