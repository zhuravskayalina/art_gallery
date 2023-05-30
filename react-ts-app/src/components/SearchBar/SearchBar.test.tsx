import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import localStorageClient from '../../LocalStorageClient/LocalStorageClient';

describe('SearchBar', () => {
  it('input focus', () => {
    render(<SearchBar handleSearch={() => {}} searchValue="" handleChangeSearch={() => {}} />);
    const input = screen.getByTestId('search-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('input initial value from local storage', () => {
    render(<SearchBar handleSearch={() => {}} searchValue="" handleChangeSearch={() => {}} />);
    const input = screen.getByTestId('search-input');
    const value = localStorageClient.getSearchValue();
    expect(input).toHaveTextContent(value || '');
  });
});
