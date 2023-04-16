import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import RickAndMorty from './RickAndMorty';
import store from '../../../redux/store';

describe('RickAndMorty', () => {
  it('fetching cards when open page', async () => {
    render(
      <Provider store={store}>
        <RickAndMorty />
      </Provider>
    );
    expect(await screen.findByTestId('rm-cards')).toBeInTheDocument();
  });
});
