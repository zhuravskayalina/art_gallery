import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';
import { exampleCards } from '../../../tests/testsDataBase';

describe('Card', () => {
  it('have the following elements', () => {
    render(<FormCard card={exampleCards[0]} />);
    expect(screen.getByText(/Feedback from Our Guest/i)).toBeInTheDocument();
    expect(screen.getByText(/Innocence/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'shared impression' })).toBeInTheDocument();
    expect(screen.getByText(/Was at Cultured Kid Gallery 02.03.2023/i)).toBeInTheDocument();
    expect(screen.getByText(/I am feedback/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Guest has got our postcard!/i)).toBeInTheDocument();
  });
});
