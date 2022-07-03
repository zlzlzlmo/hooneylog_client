/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import singletonRouter, { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import SearchForm from './SearchForm';

jest.mock('next/router', () => require('next-router-mock'));

describe('<SearchForm/>', () => {
  test('initial render, display a searchIcon and dont display searchInput', () => {
    render(<SearchForm />);

    const searchIcon = screen.getByTestId('search-icon');
    const searchInput = screen.getByPlaceholderText('검색어를 입력해주세요.');

    expect(searchIcon).toBeInTheDocument();
    expect(searchInput).not.toBeVisible();
  });

  test('make a searchInput to be visible when to click a searchIcon', async () => {
    render(<SearchForm />);

    const searchIcon = screen.getByTestId('search-icon');

    await userEvent.click(searchIcon);
    const searchInput = screen.getByPlaceholderText('검색어를 입력해주세요.');
    expect(searchInput).toBeVisible();
  });

  test('check if routing happes when to press the enter of key at a search input', async () => {
    render(<SearchForm />);

    const searchIcon = screen.getByTestId('search-icon');

    await userEvent.click(searchIcon);
    const searchInput = screen.getByPlaceholderText('검색어를 입력해주세요.');

    await userEvent.type(searchInput, 'react');
    await userEvent.type(searchInput, '{enter}');

    expect(singletonRouter).toMatchObject({ asPath: '/search?search=react' });
  });
});
