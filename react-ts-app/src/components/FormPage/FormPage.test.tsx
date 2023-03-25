import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('form page displays renders correctly', () => {
    render(<FormPage />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/Tell us about your experience at/i);
  });
});
