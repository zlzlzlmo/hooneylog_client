import QueryParam from './queryParam';

let queryParam: QueryParam;

describe('queryParam', () => {
  describe('when to have one queryParam', () => {
    beforeEach(() => {
      window.history.pushState({}, '', '/search?category=typescript');
      queryParam = new QueryParam();
    });
    test('get a proper first key name', () => {
      expect(queryParam.firstKeyName).toBe('category');
    });

    test('get a proper first value', () => {
      expect(queryParam.firstValue).toBe('typescript');
    });
  });

  describe('when to have two or more query param', () => {
    beforeEach(() => {
      window.history.pushState({}, '', '/search?category=typescript&tag=react');
      queryParam = new QueryParam();
    });
    test('have 2 length and return true ', () => {
      expect(queryParam.hasOverTwoKey()).toBeTruthy();
    });
  });
});
