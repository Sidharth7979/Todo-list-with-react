// index.js
import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store'; // Ensure this path is correct
import App from './App';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
