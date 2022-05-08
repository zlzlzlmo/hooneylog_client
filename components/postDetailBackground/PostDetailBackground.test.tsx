/* eslint-disable import/no-extraneous-dependencies */

import { render, screen } from '@testing-library/react';
import { BACKGROUND_MAIN_IMAGE } from 'ts/constant';
import Introduce from './PostDetailBackground';

describe('<Introduce/>', () => {
  test(`초기 렌더링`, () => {
    render(<Introduce imageUrl={BACKGROUND_MAIN_IMAGE} />);
    expect(screen.getByTitle('introduce_background')).toBeInTheDocument();
  });
});
