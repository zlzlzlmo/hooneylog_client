/* eslint-disable import/no-extraneous-dependencies */

import { render, screen } from '@testing-library/react';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import { definePathNameProperty } from 'util/test';
import Introduce from './Introduce';

describe('<Introduce/>', () => {
  test(`초기 렌더링`, () => {
    render(<Introduce mainImage={BACKGROUND_MAIN_IMAGE} />);
    expect(screen.getByTitle('introduce_background')).toBeInTheDocument();
  });

  test(`백그라운드 컨테이너 스타일 확인`, () => {
    definePathNameProperty('/');
    render(<Introduce mainImage={BACKGROUND_MAIN_IMAGE} />);
    expect(screen.getByTitle('introduce_background')).toHaveStyle({
      backgroundImage: `url(${BACKGROUND_MAIN_IMAGE})`,
      height: '40vh',
    });
  });

  test('인덱스 페이지가 아닐때 height', () => {
    definePathNameProperty('/post/test');
    render(<Introduce mainImage={BACKGROUND_MAIN_IMAGE} />);
    expect(screen.getByTitle('introduce_background')).toHaveStyle({
      height: '20rem',
    });
  });
});
