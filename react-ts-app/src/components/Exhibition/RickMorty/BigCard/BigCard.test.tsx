import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BigCard from './BigCard';
import store from '../../../../redux/store';

describe('BigCard', () => {
  it('renders card properly', async () => {
    render(
      <Provider store={store}>
        <BigCard characterId={1} />
      </Provider>
    );

    expect(await screen.findByText(/Rick Sanchez/i)).toBeInTheDocument();
  });
});
