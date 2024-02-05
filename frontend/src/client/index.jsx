import * as React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from '../shared/App';
import { Provider } from 'react-redux';
import { store } from '../reducers';

const root = hydrateRoot(document.getElementById('react_root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
