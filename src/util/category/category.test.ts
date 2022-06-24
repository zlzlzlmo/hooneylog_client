import AbstractCategory, { ALL } from './category';

describe('Category', () => {
  test('카테고리 리스트가 인자로 들어갈시 카테고리 이름이 객체의 Key값으로 총 갯수가 Value로 정상적으로 데이터가 생성', () => {
    const category = new AbstractCategory(['typescript', 'javascript', 'typescript', 'react']);
    expect(category.objectWithCount).toEqual({
      typescript: 2,
      javascript: 1,
      react: 1,
      [ALL]: 4,
    });
  });

  test('기타가 들어갔을때 기타는 갯수 상관없이 가장 마지막에 위치하고 다른 카테고리들은 갯수당 내림 차순 정렬', () => {
    const category = new AbstractCategory(['typescript', 'javascript', 'typescript', 'react', '기타', '기타']);
    expect(category.orderedListByDescendingCount).toEqual([
      [ALL, 6],
      ['typescript', 2],
      ['javascript', 1],
      ['react', 1],
      ['기타', 2],
    ]);
  });
});
