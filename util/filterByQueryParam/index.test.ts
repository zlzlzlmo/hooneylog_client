/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NotionPost } from 'ts/interface/notion';
import { defineSearchProperty } from 'util/test';
import Filter from '.';

describe('filteredByQueryParam', () => {
  let instance: Filter;

  const dummyList: NotionPost[] = [
    {
      title: '검색 컨트롤러 테스트',
      category: 'test',
      createdAt: 'test',
      description: 'test',
      id: 'test',
      tags: [{ id: '1', name: '태그당' }],
    },
    {
      title: '재미있는 블로그 개발 테스트',
      category: 'test',
      createdAt: 'test',
      description: '헤헤헤',
      id: 'test1',
      tags: [],
    },
    {
      title: '프론트엔드 개발자 신승훈!!!',
      category: 'test',
      createdAt: 'test',
      description: 'test',
      id: 'test3',
      tags: [],
    },
    {
      title: '화이팅~~',
      category: '카테고리',
      createdAt: 'test',
      description: '후하하하하',
      id: 'test4',
      tags: [{ id: '3', name: '오이잉' }],
    },
  ];

  beforeEach(() => {
    instance = new Filter(dummyList);
  });
  test('search 하나만 입력했을때 정상적으로 필터 작동하는지', () => {
    const searchValue = '재미있는';
    defineSearchProperty(`?search=${searchValue}`);
    expect(instance.filteredList()[0].title.indexOf(searchValue)).not.toEqual(-1);
  });

  test('tag와 category 필터로 1개만 나오는 검색 필터', () => {
    defineSearchProperty(`?tag=오이잉&category=카테고리`);
    expect(instance.filteredList().length).toEqual(1);
  });

  test('존재하지 않는 필터', () => {
    defineSearchProperty(`?search=테스트&category=카테고리`);
    expect(instance.filteredList().length).toEqual(0);
  });

  test('존재하지 않는 필터', () => {
    defineSearchProperty(`?search=테스트&category=카테고리`);
    expect(instance.filteredList().length).toEqual(0);
  });
});

export {};
