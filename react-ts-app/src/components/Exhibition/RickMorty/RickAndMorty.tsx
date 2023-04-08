import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './rick-morty.module.scss';
import SearchBar from '../../SearchBar/SearchBar';
import { APIResponse, Character } from '../../../APIClient/types';
import ApiClient from '../../../APIClient/APIClient';
import Cards from './Cards/Cards';
import Modal from '../../Modal/Modal';
import BigCard from './BigCard/BigCard';

const cx = classNames.bind(styles);

const RickAndMortyExhibition = () => {
  const [characters, setCharacters] = useState<Character[]>();
  const [isModalActive, setModalActive] = useState(false);
  const [specificCharacter, setSpecificCharacter] = useState<Character>();

  useEffect(() => {
    ApiClient.getCharacters().then((response: APIResponse) => {
      setCharacters(response.results);
    });
  }, []);

  const handleCardClick = (id: number) => {
    setModalActive(true);

    ApiClient.getCharacter(id).then((character) => {
      setSpecificCharacter(character);
    });
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
        <SearchBar />
      </div>
      {characters ? (
        <Cards characters={characters} openCard={handleCardClick} />
      ) : (
        <p>Loading...</p>
      )}
      <Modal active={isModalActive} setActive={setModalActive}>
        {specificCharacter ? <BigCard character={specificCharacter} /> : <p>Loading...</p>}
      </Modal>
    </div>
  );
};

export default RickAndMortyExhibition;
