import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { it } from 'vitest';
import App from '../App';

describe('ReactRouter', () => {
  it('should renders home page by default and about page by click', () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    expect(screen.getByText(/Featured Paintings/i)).toBeInTheDocument();
    user.click(screen.getByText(/about/i));
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  it('Renders not found page if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/bad-path']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent(/Page not found/i);
  });
});
