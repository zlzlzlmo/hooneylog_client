import { appendQueryString, dateFormat } from '.';

describe('Common Util', () => {
  test('dateFormat ', () => {
    expect(dateFormat('2022-05-22T01:57:00.000Z')).toStrictEqual('2022년 5월 22일 10:57');
  });

  test('쿼리 파람 append 적상 작동', () => {
    appendQueryString('category', 'test');
    expect(window.location.search).toStrictEqual('?category=test');
  });

  test('카테고리 필터하고 태그로 필터했을때 카테고리가 사라지는지 체크 ( 카테고리와 태그는 중복 필터가 안되도록 개발된 상태 )', () => {
    appendQueryString('category', 'test');
    appendQueryString('tag', 'hello');
    expect(window.location.search).toStrictEqual('?tag=hello');
  });

  test('태그 필터하고 카테고리로 필터했을때 태그가 사라지는지 체크 ( 카테고리와 태그는 중복 필터가 안되도록 개발된 상태 )', () => {
    appendQueryString('tag', 'hello');
    appendQueryString('category', 'test');
    expect(window.location.search).toStrictEqual('?category=test');
  });
});

export {};
