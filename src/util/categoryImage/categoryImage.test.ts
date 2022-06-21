import CategoryImage from './categoryImage';

describe('CategoryImage', () => {
  test('카테고리별 정적 이미지를 가져오기 위한 . 이 사라진다', () => {
    const categoryImageSrc = new CategoryImage('next.js').src;
    expect(categoryImageSrc).toBe('/images/nextjs.png');
  });
});
