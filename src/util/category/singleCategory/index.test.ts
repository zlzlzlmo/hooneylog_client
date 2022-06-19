import SingleCategoryManager from '.';

describe('singleCategory', () => {
  let instance: SingleCategoryManager;

  beforeEach(() => {
    instance = new SingleCategoryManager('nest.js');
  });

  test('첫 글자만 대문자로 출력', () => {
    expect(instance.categoryLetterToShow).toEqual('Nest.js');
  });

  test('카테고리별 올바른 색상 출력', () => {
    expect(instance.categoryColorToShow).toEqual('#3F6393');
  });

  test('카테고리에 알맞은 이미지 src가 정상적으로 get', () => {
    expect(instance.categoryImageSrc).toEqual('/images/nestjs.png');
  });
});
export {};
