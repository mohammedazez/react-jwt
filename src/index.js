import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import provider dari react redux
import { Provider } from 'react-redux';

// Import store
import store from './redux/store';

ReactDOM.render(
  // Bungkus app.js dengan Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

