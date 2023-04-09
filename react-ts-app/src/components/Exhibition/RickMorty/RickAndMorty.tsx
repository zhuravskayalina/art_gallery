import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './rick-morty.module.scss';
import SearchBar from '../../SearchBar/SearchBar';
import { APIResponse, Character } from '../../../APIClient/types';
import Cards from './Cards/Cards';
import Modal from '../../Modal/Modal';
import BigCard from './BigCard/BigCard';
import localStorageClient from '../../../LocalStorageClient/LocalStorageClient';
import ApiClient from '../../../APIClient/APIClient';
import Loader from '../../Loader/Loader';

const cx = classNames.bind(styles);

function LoaderBox(): JSX.Element {
  return (
    <div className={cx('loader-box')}>
      <Loader />
    </div>
  );
}

const RickAndMortyExhibition = () => {
  const [characters, setCharacters] = useState<Character[]>();
  const [isModalActive, setModalActive] = useState(false);
  const [specificCharacter, setSpecificCharacter] = useState<Character>();
  const [isLoadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    ApiClient.getCharacters().then((response: APIResponse) => {
      setCharacters(response.results);
    });
  }, []);

  const handleCardClick = (id: number) => {
    setSpecificCharacter(undefined);
    setModalActive(true);

    ApiClient.getCharacter(id).then((character) => {
      setSpecificCharacter(character);
    });
  };

  const handleKeyDown = (searchValue: string) => {
    localStorageClient.setSearchValue(searchValue.toLowerCase());
    if (characters) {
      if (searchValue) {
        setLoadingSearch(true);
        ApiClient.getCharactersByName(searchValue).then((response) => {
          setCharacters(response.results);
          setLoadingSearch(false);
        });
      } else {
        setLoadingSearch(true);
        ApiClient.getCharacters().then((response) => {
          setCharacters(response.results);
          setLoadingSearch(false);
        });
      }
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
        <SearchBar handleKeyDown={handleKeyDown} />
      </div>
      {characters && !isLoadingSearch ? (
        <Cards characters={characters} openCard={handleCardClick} />
      ) : (
        LoaderBox()
      )}
      <Modal active={isModalActive} setActive={setModalActive}>
        {specificCharacter ? <BigCard character={specificCharacter} /> : LoaderBox()}
      </Modal>
    </div>
  );
};

export default RickAndMortyExhibition;
