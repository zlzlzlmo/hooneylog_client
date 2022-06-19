import MultipleCategoryManager from '.';

describe('multipleCategory', () => {
  let instance: MultipleCategoryManager;

  const dummyCateNameList = [
    'nest.js',
    'nest.js',
    '알고리즘',
    '알고리즘',
    'typescript',
    '최적화',
    'esbuild',
    '기타',
    '기타',
    '기타',
    '기타',
    'react',
    'javascript',
    'react',
  ];
  beforeEach(() => {
    instance = new MultipleCategoryManager(dummyCateNameList);
  });

  test('카테고리별 포스트 갯수별로 내림차순이 되고, 기타는 반드시 맨 뒷쪽으로 배치, 카운트가 같다면 카테고리 텍스트는 오름차순', () => {
    expect(instance.sortedCountCategoryList).toEqual([
      ['알고리즘', 2],
      ['nest.js', 2],
      ['react', 2],
      ['최적화', 1],
      ['esbuild', 1],
      ['javascript', 1],
      ['typescript', 1],
      ['기타', 4],
    ]);
  });
});

export {};
