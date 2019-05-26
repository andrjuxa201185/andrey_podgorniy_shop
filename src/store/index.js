/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import { user } from './user';
import { products } from './products';

const rootReducers = combineReducers({ user, products });

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
