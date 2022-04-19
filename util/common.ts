/* eslint-disable consistent-return */
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';
import client from 'sanity/config';
import { DateTimeFormatOptions } from 'ts/interface/date';
import { Device } from 'ts/enum';

/* eslint-disable import/prefer-default-export */
export const getSanityImageurl = (source: SanityImageSource) => {
  const imgBuilder = imageUrlBuilder(client);
  return imgBuilder.image(source);
};

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
