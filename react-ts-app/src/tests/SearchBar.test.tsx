import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';
import localStorageClient from '../LocalStorageClient/LocalStorageClient';

describe('SearchBar', () => {
  it('input focus', () => {
    render(<SearchBar />);
    const input = screen.getByTestId('search-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('input initial value from local storage', () => {
    render(<SearchBar />);
    const input = screen.getByTestId('search-input');
    const value = localStorageClient.getSearchValue();
    expect(input).toHaveTextContent(value || '');
  });
});
