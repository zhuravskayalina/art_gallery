import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('Renders heading', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/About us/i);
  });
});
