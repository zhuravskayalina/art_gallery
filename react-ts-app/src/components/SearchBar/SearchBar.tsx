import { ChangeEvent, useState, KeyboardEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './search-bar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import localStorageClient from '../../LocalStorageClient/LocalStorageClient';

const cx = classNames.bind(styles);

interface SearchBarProps {
  handleKeyDown: (searchValue: string) => void;
}

const SearchBar = ({ handleKeyDown }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(localStorageClient.getSearchValue() || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleKeyDown(inputValue);
    }
  };

  return (
    <div className={cx('search')}>
      <input
        data-testid="search-input"
        type="search"
        className={cx('search__input')}
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
        onKeyDown={handleSearch}
      />
      <SearchIcon className={cx('search__icon')} />
    </div>
  );
};

export default SearchBar;
