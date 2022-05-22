import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'redux/configStore';
import { defineSearchProperty } from 'util/test';
import CategoryFilter from './CategoryFilter';

jest.mock(`hooks/useCategoryFilter`, () => {
  return jest.fn(() => ({
    categoryListToShow: [
      ['all', 8],
      ['typescript', 4],
      ['javscript', 2],
      ['react', 1],
      ['기타', 1],
    ],
    routerPushFor: jest.fn((category) => defineSearchProperty(`/?category=${category}`)),
  }));
});

describe('<DesktopCategoryFilter/>', () => {
  test('초기 렌더시 all 카테고리가 active가 되어있는지 테스트', () => {
    render(
      <Provider store={store}>
        <CategoryFilter />
      </Provider>,
    );

    const allCategory = screen.getByText(/all/i);
    expect(allCategory).toBeInTheDocument();
    expect(allCategory).toHaveTextContent('All');
    expect(allCategory).toHaveClass('active');
  });

  test('정상적인 갯수의 리스트가 렌더링 되는지 테스트', () => {
    const { container } = render(
      <Provider store={store}>
        <CategoryFilter />
      </Provider>,
    );

    const list = container.querySelectorAll('li');
    expect(list.length).toBe(5);
  });

  test('카테고리 클릭시 active가 되고 routing이 제대로 되는지 테스트', async () => {
    render(
      <Provider store={store}>
        <CategoryFilter />
      </Provider>,
    );

    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/typescript/i));

    await waitFor(() => {
      expect(screen.getByText(/typescript/i)).toHaveClass('active');
    });
    expect(window.location.search).toBe('/?category=typescript');
  });
});
