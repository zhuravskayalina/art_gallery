import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { exampleCharacters } from '../../../../tests/testsDataBase';

describe('Cards', () => {
  it('have characters list', () => {
    render(<Cards characters={exampleCharacters} openCard={() => {}} />);
    expect(screen.getByRole('list', { name: '' })).toBeInTheDocument();
  });
  it('renders cards properly', () => {
    render(<Cards characters={exampleCharacters} openCard={() => {}} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });
});
