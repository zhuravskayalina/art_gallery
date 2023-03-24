import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './search-bar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import localStorageClient from '../../LocalStorageClient/LocalStorageClient';
import { SearchBarProps } from './types';

const cx = classNames.bind(styles);

type State = {
  inputValue: string | undefined;
};

class SearchBar extends Component<SearchBarProps, State> {
  constructor(props: SearchBarProps) {
    super(props);

    const searchValue = localStorageClient.getSearchValue();

    this.state = { inputValue: searchValue || '' };
    this.handleChange = this.handleChange.bind(this);
  }

  public componentWillUnmount() {
    const { inputValue } = this.state;

    if (inputValue) {
      localStorageClient.setSearchValue(inputValue);
    } else {
      localStorageClient.removeSearchValue();
    }
  }

  private readonly handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={cx('search')}>
        <input
          data-testid="search-input"
          type="search"
          className={cx('search__input')}
          value={inputValue}
          onChange={this.handleChange}
          placeholder="Search"
        />
        <SearchIcon className={cx('search__icon')} />
      </div>
    );
  }
}

export default SearchBar;
