/* eslint-disable no-new */
/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleCategoryManager from './multipleCategory';

let instance: MultipleCategoryManager;
let data: string[];

beforeEach(() => {
  // typescript 3
  // cms 1
  // javascript 1
  // react 1
  data = ['typescript', 'typescript', 'typescript', 'javascript', '기타', 'react', 'cms', '기타', '기타'];
  instance = new MultipleCategoryManager(data);
});

describe('multipleCategoryManager', () => {
  test('카테고리의 이름과 갯수가 내림차순으로 잘 정렬되는지', () => {
    expect(instance.sortedCountCategoryList).toEqual([
      ['typescript', 3],
      ['cms', 1],
      ['javascript', 1],
      ['react', 1],
      ['기타', 3],
    ]);
  });
});
