import classNames from 'classnames/bind';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './rick-morty.module.scss';
import SearchBar from '../../SearchBar/SearchBar';
import { APIResponse, Character } from '../../../APIClient/types';
import Cards from './Cards/Cards';
import Modal from '../../Modal/Modal';
import BigCard from './BigCard/BigCard';
import ApiClient from '../../../APIClient/APIClient';
import Loader from '../../Loader/Loader';
import Pagination from './Pagination/Pagination';
import { RootState } from '../../../redux/store';
import { setSavedValue, setCurrentValue } from '../../../redux/searchBar/searchBarSlice';

const cx = classNames.bind(styles);

function LoaderBox(): JSX.Element {
  return (
    <div className={cx('loader-box')}>
      <Loader />
    </div>
  );
}

const RickAndMortyExhibition = () => {
  const searchValue = useSelector((state: RootState) => state.searchbar.currentValue);
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState<Character[]>();
  const [isModalActive, setModalActive] = useState(false);
  const [specificCharacter, setSpecificCharacter] = useState<Character>();
  const [isLoadingSearch, setLoadingSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [disablePaginationButtons, setDisablePaginationButtons] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const setResponseData = (response: APIResponse) => {
    setCharacters(response.results);
    setPagesCount(response.info.pages);
    setPrevPage(response.info.prev);
    setNextPage(response.info.next);
  };

  useEffect(() => {
    if (searchValue) {
      ApiClient.getCharactersByName(searchValue).then((response: APIResponse) => {
        if (response) {
          setLoadingSearch(false);
          setResponseData(response);
        } else {
          setCharacters(undefined);
          setLoadingSearch(false);
          setSearchError(true);
        }
      });
    } else {
      ApiClient.getCharacters().then((response: APIResponse) => {
        setResponseData(response);
      });
    }
  }, []);

  const handleCardClick = (id: number) => {
    setSpecificCharacter(undefined);
    setModalActive(true);

    ApiClient.getCharacter(id).then((character) => {
      setSpecificCharacter(character);
    });
  };

  const handleSearch = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSearchError(false);
      dispatch(setSavedValue(searchValue));
      if (searchValue) {
        setLoadingSearch(true);
        ApiClient.getCharactersByName(searchValue).then((response: APIResponse) => {
          if (response) {
            setLoadingSearch(false);
            setResponseData(response);
          } else {
            setCharacters(undefined);
            setLoadingSearch(false);
            setSearchError(true);
          }
        });
      } else {
        setLoadingSearch(true);
        ApiClient.getCharacters().then((response: APIResponse) => {
          setLoadingSearch(false);
          setResponseData(response);
        });
      }
    }
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentValue(event.target.value));
  };

  const handleSwitchPage = (to: 'prev' | 'next') => {
    if (to === 'next' && nextPage) {
      setDisablePaginationButtons(true);
      setCharacters(undefined);
      ApiClient.getCharactersPerPage(nextPage).then((response) => {
        setCurrentPage((prev) => prev + 1);
        setResponseData(response);
        setDisablePaginationButtons(false);
      });
    } else if (to === 'prev' && prevPage) {
      setDisablePaginationButtons(true);
      setCharacters(undefined);
      ApiClient.getCharactersPerPage(prevPage).then((response) => {
        setCurrentPage((prev) => prev - 1);
        setResponseData(response);
        setDisablePaginationButtons(false);
      });
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('text')}>
        <h2 className={cx('text__heading')}>Welcome to our Rick and Morty Exhibition!</h2>
        <p className={cx('text__subheading')}>
          Calling all Rick & Morty fans! A free exhibition comes to Paris. From March 10 to 20,
          2023, go and discover works by ten artists revisiting the main pop culture characters
          during this temporary event.
        </p>
        <p className={cx('text__description')}>
          Rick & Morty is a crazy, dark humored series taking us to a fun sci-fi universe. Now fully
          part of pop-culture, it takes us to the adventures of Morty Smith and his grandfather,
          Rick Sanchez, through infinite dimensions. As the series – making fun of Back to the
          Future – is wrapping the 6th season, a temporary event in Paris is likely to make you very
          happy.
        </p>
      </div>
      <div className={cx('searchbar')}>
        <SearchBar
          searchValue={searchValue}
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        />
      </div>
      {characters && !isLoadingSearch ? (
        <div data-testid="cards" className={cx('cards')}>
          <Pagination
            disablePaginationButtons={disablePaginationButtons}
            currentPage={currentPage}
            handleSwitchPage={handleSwitchPage}
            nextPage={nextPage}
            pagesCount={pagesCount}
            prevPage={prevPage}
          />
          <Cards characters={characters} openCard={handleCardClick} />
        </div>
      ) : (
        !searchError && LoaderBox()
      )}
      {searchError && <p className={cx('search-error-message')}>Sorry, no results found</p>}
      <Modal active={isModalActive} setActive={setModalActive}>
        {specificCharacter ? <BigCard character={specificCharacter} /> : LoaderBox()}
      </Modal>
    </div>
  );
};

export default RickAndMortyExhibition;
