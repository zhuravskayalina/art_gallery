import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './search-bar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import localStorageClient from '../../LocalStorageClient/LocalStorageClient';

const cx = classNames.bind(styles);

function SearchBar() {
  const [inputValue, setInputValue] = useState(localStorageClient.getSearchValue() || '');
  const inputRef = useRef<string>();

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorageClient.setSearchValue(inputRef.current || '');
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    inputRef.current = event.target.value;
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
      />
      <SearchIcon className={cx('search__icon')} />
    </div>
  );
}

export default SearchBar;
