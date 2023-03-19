import React, { Component } from 'react';
import styles from './search-bar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import localStorageClient from '../../LocalStorageClient/LocalStorageClient';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchBarProps {}

type State = {
  inputValue: string | undefined;
};

class SearchBar extends Component<SearchBarProps, State> {
  constructor(props: SearchBarProps) {
    super(props);

    const searchValue = localStorageClient.getSearchValue();

    this.state = { inputValue: searchValue || '' };
    // this.handleChange = this.handleChange.bind(this);
  }

  public componentWillUnmount() {
    const { inputValue } = this.state;

    if (inputValue) {
      localStorageClient.setSearchValue(inputValue);
    } else {
      localStorageClient.removeSearchValue();
    }
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={styles.search}>
        <input
          data-testid="search-input"
          type="search"
          className={styles.searchInput}
          value={inputValue}
          onChange={this.handleChange}
          placeholder="Search"
        />
        <SearchIcon className={styles.searchIcon} />
      </div>
    );
  }
}

export default SearchBar;
