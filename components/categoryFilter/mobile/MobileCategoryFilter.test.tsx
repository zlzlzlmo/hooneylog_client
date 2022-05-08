import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/configStore';
import MobileCategoryFilter from './MobileCategoryFilter';

beforeEach(() => {
  render(
    <Provider store={store}>
      <MobileCategoryFilter />
    </Provider>,
  );
});

describe('<MobileCategoryFilter/>', () => {
  test('initial render', () => {
    expect(screen.getByTitle('categoryFilter')).toBeInTheDocument();
  });

  test('햄버거 버튼 클릭했을때 정상적으로 active가 되는지 확인', async () => {
    expect(screen.getByTitle('hamburger')).toBeInTheDocument();
    fireEvent.click(screen.getByTitle('hamburger'));
    expect(screen.getByTitle('popup')).toHaveClass('active');
  });

  test('카테고리 팝업에서 X 버튼 눌렀을때 잘 닫히는지 확인', async () => {
    expect(screen.getByTitle('closePopup')).toBeInTheDocument();
    fireEvent.click(screen.getByTitle('closePopup'));
    expect(screen.getByTitle('popup')).not.toHaveClass('active');
  });
});
