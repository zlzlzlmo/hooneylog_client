import { defineSearchProperty } from 'util/test';
import SingleCategoryManager from '.';

describe('singleCategory', () => {
  let instance: SingleCategoryManager;

  beforeEach(() => {
    instance = new SingleCategoryManager('typescript');
  });

  test('첫 글자만 대문자로 출력', () => {
    expect(instance.categoryLetterToShow).toEqual('Typescript');
  });

  test('카테고리별 올바른 색상 출력', () => {
    expect(instance.categoryColorToShow).toEqual('#2661B9');
  });

  test('category query param이 정상적으로 get', () => {
    defineSearchProperty('?category=typescript');
    expect(instance.categorySearchParam).toEqual('typescript');
  });

  test('카테고리에 알맞은 이미지 src가 정상적으로 get', () => {
    expect(instance.categoryImageSrc).toEqual('/images/typescript.png');
  });
});
export {};
