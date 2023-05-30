import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

hydrateRoot(
  document.getElementById('root') as HTMLDivElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
