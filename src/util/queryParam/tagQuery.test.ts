import TagQuery from './tagQuery';

test('get a proper value when to have a tag query param', () => {
  window.history.pushState({}, '', '/search?tag=tdd');
  expect(new TagQuery().getTagQueryValue()).toBe('tdd');
});
