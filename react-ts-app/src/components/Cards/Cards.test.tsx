import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import paintings from '../../db/dataBase';

describe('Cards', () => {
  it('renders all cards', () => {
    render(<Cards paintings={paintings} />);
    expect(screen.getByTestId('cards')).toBeInTheDocument();
    expect(screen.getAllByTestId('smallCard')).toHaveLength(5);
  });
});
