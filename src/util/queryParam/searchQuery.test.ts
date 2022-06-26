import SearchQuery from './searchQuery';

test('get a proper value when it has search query param', () => {
  window.history.pushState({}, '', '/search?search=test');
  expect(new SearchQuery().getSearchQueryValue()).toBe('test');
});
