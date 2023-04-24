import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import store from './redux/store';

export function render(url: string, opts?: object) {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
}
