import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/configStore';
import DesktopCategoryFilter from './DesktopCategoryFilter';

jest.mock(`hooks/useCategoryFilter`, () => {
  return jest.fn(() => ({
    categoryListToShow: [
      ['all', 8],
      ['typescript', 4],
      ['javscript', 2],
      ['react', 1],
      ['기타', 1],
    ],
  }));
});

describe('<DesktopCategoryFilter/>', () => {
  test('초기 렌더시 all 카테고리가 active가 되어있는지 테스트', () => {
    render(
      <Provider store={store}>
        <DesktopCategoryFilter />
      </Provider>,
    );

    const allCategory = screen.getByText(/all/i);
    screen.debug();
    expect(allCategory).toBeInTheDocument();
    expect(allCategory).toHaveTextContent('All');
    expect(allCategory).toHaveClass('active');
  });

  test('정상적인 갯수의 리스트가 렌더링 되는지 테스트', () => {
    const { container } = render(
      <Provider store={store}>
        <DesktopCategoryFilter />
      </Provider>,
    );

    const list = container.querySelectorAll('li');
    expect(list.length).toBe(5);
  });
});
