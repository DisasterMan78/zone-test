/* globals document */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from './reducers';

import './css/styles.css';

import AppConnected from './containers/App';


const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById('root')
);
