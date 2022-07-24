import { notionMockData } from 'mock/notionData';
import CategoryCommand from './command/categoryCommand';
import SearchCommand from './command/searchCommand';
import TagCommand from './command/tagCommand';
import FilterCommand from './filterCommand';

let filterByQueryParam: FilterCommand;

beforeEach(() => {
  filterByQueryParam = new FilterCommand(notionMockData);
});

describe('filterByQueryParam', () => {
  describe('when to have filtered notion list', () => {
    test('get a filtered new notion list by search param', () => {
      window.history.pushState({}, '', '/?search=react');
      expect(filterByQueryParam.excuteCommand(new SearchCommand())).toHaveLength(3);
    });

    test('get a filtered new notion list by all word of category param', () => {
      window.history.pushState({}, '', '/?category=전체');
      expect(filterByQueryParam.excuteCommand(new CategoryCommand())).toHaveLength(32);
    });

    test('get a filtered new notion list by a typecript word of category param', () => {
      window.history.pushState({}, '', '/?category=typescript');
      expect(filterByQueryParam.excuteCommand(new CategoryCommand())).toHaveLength(7);
    });

    test('get a filtered new notion list by a tdd word of tag param ', () => {
      window.history.pushState({}, '', '/?tag=tdd');
      expect(filterByQueryParam.excuteCommand(new TagCommand())).toHaveLength(1);
    });
  });
});
