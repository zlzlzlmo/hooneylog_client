/* eslint-disable no-unused-expressions */
import { CategoryBackgroundColor } from 'ts/enum';
import SingleCategoryManager from './singleCategory';

describe('singleCategoryManager', () => {
  const instance = new SingleCategoryManager('typescript');
  test('categoryLetterToShow test', () => {
    expect(instance.categoryLetterToShow).toBe('Typescript');
  });

  test('categoryColorToShow test', () => {
    expect(instance.categoryColorToShow).toBe(CategoryBackgroundColor.Typescript);
  });
});
