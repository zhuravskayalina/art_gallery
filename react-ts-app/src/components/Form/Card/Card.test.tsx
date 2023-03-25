import { render, screen } from '@testing-library/react';
import Card from './Card';
import exampleImg from '../../../assets/images/gallery1.jpeg';
import { CardData } from '../types';

describe('Card', () => {
  it('have the following elements', () => {
    const exampleCard: CardData = {
      userName: 'Angel',
      feedback: `It was such a great time i spend in this gallery! Recommend from my heart!`,
      favouriteArtwork: 'Innocence',
      visitDate: '02.03.2023',
      photo: exampleImg,
      whatLikeAboutGallery: ['nice lightning'],
      isAnonymously: true,
      isWantPostcard: true,
    };
    render(<Card card={exampleCard} />);
    expect(screen.getByText(/Feedback from Our Guest/i)).toBeInTheDocument();
    expect(screen.getByText(/Innocence/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'shared impression' })).toBeInTheDocument();
    expect(screen.getByText(/Was at Cultured Kid Gallery 02.03.2023/i)).toBeInTheDocument();
    expect(screen.getByText(/Recommend from my heart!/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Guest has got our postcard!/i)).toBeInTheDocument();
  });
});
