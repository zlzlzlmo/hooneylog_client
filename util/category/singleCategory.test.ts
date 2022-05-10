/* eslint-disable no-unused-expressions */
import { ALL_LOWER_CASE } from 'ts/constant';
import { CategoryBackgroundColor } from 'ts/enum';
import { defineSearchProperty } from 'util/test';
import SingleCategoryManager from './singleCategory';

let instance: SingleCategoryManager;

beforeEach(() => {
  instance = new SingleCategoryManager('typescript');
});

describe('singleCategoryManager', () => {
  test('카테고리의 첫글자가 대문자이고 나머지가 소문자로 나오는지 테스트', () => {
    expect(instance.categoryLetterToShow).toBe('Typescript');
  });

  test('카테고리에 맞는 색깔이 잘 나오는지 테스트', () => {
    expect(instance.categoryColorToShow).toBe(CategoryBackgroundColor.Typescript);
  });

  test('카테고리 query param이 아무것도 없을때 all 이 잘 나오는지 테스트', () => {
    expect(instance.categorySearchParam).toBe(ALL_LOWER_CASE);
  });

  test('카테고리 query param에 값이 있을때 맞는 문자가 잘 출격되는지 테스트', () => {
    const paramValue = 'react';
    defineSearchProperty(`?category=${paramValue}`);
    expect(instance.categorySearchParam).toBe(paramValue);
  });
});
