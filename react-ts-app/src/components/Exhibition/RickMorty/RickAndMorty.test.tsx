import { render, screen } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';

describe('RickAndMorty', () => {
  it('fetching cards when open page', async () => {
    render(<RickAndMorty />);
    expect(await screen.findByTestId('cards')).toBeInTheDocument();
  });
});
