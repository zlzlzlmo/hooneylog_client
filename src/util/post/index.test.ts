import { NotionPost } from 'ts/interface/notion';
import Post from '.';

describe('Post', () => {
  let instance: Post;

  const dummyList: NotionPost[] = [
    { title: 'test', category: 'test', createdAt: 'test', description: 'test', id: 'test', tags: [] },
    { title: 'test1', category: 'test', createdAt: 'test', description: 'test', id: 'test1', tags: [] },
    { title: 'test2', category: 'test', createdAt: 'test', description: 'test', id: 'test2', tags: [] },
    { title: 'test3', category: 'test', createdAt: 'test', description: 'test', id: 'test3', tags: [] },
    { title: 'test4', category: 'test', createdAt: 'test', description: 'test', id: 'test4', tags: [] },
  ];

  const dummy: NotionPost = {
    title: 'test3',
    category: 'test',
    createdAt: 'test',
    description: 'test',
    id: 'test3',
    tags: [],
  };

  beforeEach(() => {
    instance = new Post(dummyList, dummy);
  });

  test('현재 인덱스가 정상 출력', () => {
    expect(instance.currentPostIndex).toBe(3);
  });

  test('이전 포스트가 정상 출력', () => {
    expect(instance.previosPost).toStrictEqual({
      title: 'test2',
      category: 'test',
      createdAt: 'test',
      description: 'test',
      id: 'test2',
      tags: [],
    });
  });

  test('이후 포스트가 정상 출력', () => {
    expect(instance.nextPost).toStrictEqual({
      title: 'test4',
      category: 'test',
      createdAt: 'test',
      description: 'test',
      id: 'test4',
      tags: [],
    });
  });
});

export {};
