import { ChangeEvent, KeyboardEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './search-bar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const cx = classNames.bind(styles);

interface SearchBarProps {
  searchValue: string;
  handleSearch: (e: KeyboardEvent) => void;
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ handleSearch, searchValue, handleChangeSearch }: SearchBarProps) => {
  return (
    <div className={cx('search')}>
      <input
        data-testid="search-input"
        type="search"
        className={cx('search__input')}
        value={searchValue}
        onChange={handleChangeSearch}
        placeholder="Search"
        onKeyDown={handleSearch}
      />
      <SearchIcon className={cx('search__icon')} />
    </div>
  );
};

export default SearchBar;
