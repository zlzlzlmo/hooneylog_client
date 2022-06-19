/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleCategoryManager from 'util/category/multipleCategory';
import SingleCategoryManager from 'util/category/singleCategory';
import AbstractFactory from '.';

describe('AbstractFactory', () => {
  test('single cateogry type을 넣었을때 해당 클래스 생성', () => {
    expect(AbstractFactory.createCategory('single', 'typescript')).toBeInstanceOf(SingleCategoryManager);
  });

  test('multiple cateogry type을 넣었을때 해당 클래스 생성', () => {
    expect(AbstractFactory.createCategory('multiple', ['typescript', 'javascript'])).toBeInstanceOf(
      MultipleCategoryManager,
    );
  });

  test('잘못된 매개변수를 전달했을때 에러 출력', () => {
    try {
      expect(AbstractFactory.createCategory('multiple', 'typescript')).toBeUndefined();
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual('Check type or param');
    }
  });
});

export {};
