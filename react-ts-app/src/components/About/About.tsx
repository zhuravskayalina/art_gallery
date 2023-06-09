import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './about.module.scss';
import galleryImg from '../../assets/images/gallery.jpeg';
import galleryImg1 from '../../assets/images/gallery1.jpeg';

const cx = classNames.bind(styles);

class About extends Component {
  render() {
    return (
      <div className={cx('main')}>
        <div className={cx('main__container')}>
          <h1 data-test="about-heading">About us</h1>
          <p>
            At Cultured Kid Gallery, we celebrate creativity, openness, tolerance, and generosity.
            We aim to be inclusive places — both onsite and online — where diverse cultural,
            artistic, social, and political positions are welcome. We’re committed to sharing the
            most thought-provoking modern and contemporary art, and hope you will join us in
            exploring the art, ideas, and issues of our time.
          </p>
          <img src={galleryImg} className={cx('main__image')} alt="gallery" />
          <p>
            The Museum of Modern Art connects people from around the world to the art of our time.
            We aspire to be a catalyst for experimentation, learning, and creativity, a gathering
            place for all, and a home for artists and their ideas.
          </p>
          <img src={galleryImg1} className={cx('main__image')} alt="gallery now" />
          <section className={cx('main__history')}>
            <h2 className={cx('main__heading')}>History</h2>
            <p>
              In the late 1920s, three progressive and influential patrons of the arts, Lillie P.
              Bliss, Mary Quinn Sullivan, and Abby Aldrich Rockefeller, perceived a need to
              challenge the conservative policies of traditional museums and to establish an
              institution devoted exclusively to modern art. They, along with additional original
              trustees A. Conger Goodyear, Paul Sachs, Frank Crowninshield, and Josephine Boardman
              Crane, created The Museum of Modern Art in 1929. Its founding director, Alfred H.
              Barr, Jr., intended the Museum to be dedicated to helping people understand and enjoy
              the visual arts of our time, and that it might provide New York with “the greatest
              museum of modern art in the world.”
            </p>
            <p>
              The public’s response was overwhelmingly enthusiastic, and over the course of the next
              10 years the Museum moved three times into progressively larger temporary quarters,
              and in 1939 finally opened the doors of the building it still occupies in midtown
              Manhattan. Upon his appointment as the first director, Barr submitted an innovative
              plan for the conception and organization of the Museum that would result in a
              multi-departmental structure based on varied forms of visual expression. Today, these
              departments include architecture and design, drawings and prints, film, media and
              performance, painting and sculpture, and photography. Subsequent expansions took place
              during the 1950s and 1960s, planned by the architect Philip Johnson, who also designed
              The Abby Aldrich Rockefeller Garden. In 1984, a major renovation designed by Cesar
              Pelli doubled the Museum’s gallery space and enhanced visitor facilities.
            </p>
            <p>
              The rich and varied collection of The Museum of Modern Art constitutes one of the most
              comprehensive and panoramic views into modern art. From an initial gift of eight
              prints and one drawing, The Museum of Modern Art’s collection has grown to
              approximately 200,000 paintings, sculptures, drawings, prints, photographs, media and
              performance art works, architectural models and drawings, design objects, and films.
              MoMA also owns approximately two million film stills. The Museum’s Library and
              Archives contain the leading concentration of research material on modern art in the
              world, and each of the curatorial departments maintains a study center available to
              students, scholars, and researchers. MoMA’s Library holds over 320,000 items,
              including books, artists’ books, periodicals, and extensive individual files on more
              than 90,000 artists. The Museum Archives contains primary source material related to
              the history of MoMA and modern and contemporary art.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
