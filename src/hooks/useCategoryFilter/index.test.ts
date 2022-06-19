import { renderHook } from '@testing-library/react-hooks';
import * as useReduxData from 'hooks/useReduxData';
import { NotionPost } from 'ts/interface/notion';
import useCategoryFilter from '.';

describe('useCategoryFilter', () => {
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
      category: '오오',
      createdAt: 'test',
      description: 'test',
      id: 'test3',
      tags: [],
    },
    {
      title: '화이팅~~',
      category: '카테고리당',
      createdAt: 'test',
      description: '후하하하하',
      id: 'test4',
      tags: [{ id: '3', name: '오이잉' }],
    },
  ];

  beforeEach(() => {
    jest
      .spyOn(useReduxData, 'default')
      .mockReturnValueOnce({ originalNotionList: dummyList, filteredNotionList: dummyList });
  });

  test('All 카테고리가 가장 첫번째에 나오고 모든 리스트의 갯수가 정상적으로 나오는지 테스트', () => {
    const { result } = renderHook(() => useCategoryFilter());
    expect(result.current.categoryListToShow[0][0]).toEqual('all');
    expect(result.current.categoryListToShow[0][1]).toEqual(dummyList.length);
  });

  test('카테고리들이 리스트에서 잘 나눠지는지 테스트', () => {
    const { result } = renderHook(() => useCategoryFilter());
    expect(result.current.categoryListToShow.length).toEqual(4);
  });
});

export {};
