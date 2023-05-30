import classNames from 'classnames/bind';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './rick-morty.module.scss';
import SearchBar from '../../SearchBar/SearchBar';
import Cards from './Cards/Cards';
import Modal from '../../Modal/Modal';
import BigCard from './BigCard/BigCard';
import Loader from '../../Loader/Loader';
import { RootState } from '../../../redux/store';
import { setSavedValue, setCurrentValue } from '../../../redux/searchBar/searchBarSlice';
import { useGetCharactersQuery } from '../../../redux/api/apiSlice';

const cx = classNames.bind(styles);

export function LoaderBox(): JSX.Element {
  return (
    <div className={cx('loader-box')}>
      <Loader />
    </div>
  );
}

const RickAndMortyExhibition = () => {
  const currentSearchValue = useSelector((state: RootState) => state.searchbar.currentValue);
  const savedSearchValue = useSelector((state: RootState) => state.searchbar.savedValue);
  const [characterId, setCharacterId] = useState<number>();
  const [isModalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const { data: response, isLoading, isSuccess, isError } = useGetCharactersQuery(savedSearchValue);

  const handleCardClick = (id: number) => {
    setCharacterId(id);
    setModalActive(true);
  };

  const handleCloseCard = () => {
    setCharacterId(undefined);
  };

  const handleSearch = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(setSavedValue(currentSearchValue));
    }
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentValue(event.target.value));
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
          searchValue={currentSearchValue}
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        />
      </div>
      {isLoading && LoaderBox()}
      {isSuccess && <Cards characters={response.results} openCard={handleCardClick} />}
      {isError && <p className={cx('search-error-message')}>Sorry, no results found</p>}
      {characterId && (
        <Modal active={isModalActive} setActive={setModalActive} handleCloseCard={handleCloseCard}>
          <BigCard characterId={characterId} />
        </Modal>
      )}
    </div>
  );
};

export default RickAndMortyExhibition;
