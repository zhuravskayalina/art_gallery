import { render, screen } from '@testing-library/react';
import BigCard from './BigCard';
import { characterExample } from '../../../../tests/testsDataBase';

describe('BigCard', () => {
  it('renders card properly', () => {
    render(<BigCard character={characterExample} />);
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Earth/i)).toBeInTheDocument();
    expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
  });
});
