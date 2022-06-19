import { NotionPost } from 'ts/interface/notion';
import Search from '.';

describe('Search', () => {
  let instance: Search;

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
      title: '재미있는 블로그 개발',
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
      category: 'test',
      createdAt: 'test',
      description: '후하하하하',
      id: 'test4',
      tags: [{ id: '3', name: '오이잉' }],
    },
  ];

  beforeEach(() => {
    instance = new Search(dummyList);
  });
  test('description인 후하하하하 를 검색했을때 포스트가 1개만 나오는지 테스트', () => {
    expect(instance.filteredListBySearchValue('후하하하하').length).toEqual(1);
  });

  test('description인 test 를 검색했을때 포스트가 2개가 나오는지 테스트', () => {
    expect(instance.filteredListBySearchValue('test').length).toEqual(2);
  });

  test('태그인 오이잉을 검색했을때 포스트가 1개가 나오는지 테스트', () => {
    expect(instance.filteredListBySearchValue('오이잉').length).toEqual(1);
  });

  test('title인 재미있는을 검색했을때 포스트가 1개가 나오는지 테스트', () => {
    expect(instance.filteredListBySearchValue('오이잉').length).toEqual(1);
  });
});

export {};
