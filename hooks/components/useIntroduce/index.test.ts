/* eslint-disable no-multi-assign */
import { renderHook } from '@testing-library/react-hooks';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import { definePathNameProperty } from 'util/test';
import useIntroduce from '.';

describe('useIntroduce custom hook', () => {
  test('이미지 셋이 제대로 되는지 확인', () => {
    const { result } = renderHook(() => useIntroduce({ mainImage: BACKGROUND_MAIN_IMAGE }));
    expect(result.current.imageUrl).toBe(BACKGROUND_MAIN_IMAGE);
  });

  test('인덱스 페이지일때 ', () => {
    definePathNameProperty('/');
    const { result } = renderHook(() => useIntroduce({ mainImage: BACKGROUND_MAIN_IMAGE }));

    expect(result.current.isHome).toBe(true);
  });

  test('인덱스 페이지가 아닐때', () => {
    definePathNameProperty('/post/test');

    const { result } = renderHook(() => useIntroduce({ mainImage: BACKGROUND_MAIN_IMAGE }));

    expect(result.current.isHome).toBe(false);
  });
});
