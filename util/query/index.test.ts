import { defineSearchProperty } from 'util/test';
import QueryParam from '.';

describe('QueryParam', () => {
  test('category param을 정상적으로 get', () => {
    defineSearchProperty('?category=typescript');
    expect(QueryParam.queryParamFor('category')).toStrictEqual('typescript');
  });

  test('search param을 정상적으로 get', () => {
    defineSearchProperty('?search=데이터+변형');
    expect(QueryParam.queryParamFor('search')).toStrictEqual('데이터 변형');
  });

  test('tag param을 정상적으로 get', () => {
    defineSearchProperty('?tag=dto');
    expect(QueryParam.queryParamFor('tag')).toStrictEqual('dto');
  });

  test('쿼리 파람 배열이 적상적으로 삽입', () => {
    defineSearchProperty('?category=nest.js&search=데이터');
    const array = new QueryParam().queryParamsArray();
    expect(array.length).toEqual(2);
    expect(array[0]).toStrictEqual(['카테고리', 'nest.js']);
    expect(array[1]).toStrictEqual(['검색어', '데이터']);
  });
});

export {};
