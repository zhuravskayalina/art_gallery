import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import FormPage from './FormPage';
import store from '../../redux/store';

describe('FormPage', () => {
  it('form page displays renders correctly', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/Tell us about your experience at/i);
  });
});
