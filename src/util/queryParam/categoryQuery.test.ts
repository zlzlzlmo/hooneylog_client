import CategoryQuery from './categoryQuery';

test('get a proper value when to has category query param', () => {
  window.history.pushState({}, '', '/search?category=react');
  expect(new CategoryQuery().getCategoryQueryValue()).toBe('react');
});
