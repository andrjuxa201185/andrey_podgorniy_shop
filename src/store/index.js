/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import { user } from './user';
import { categories, info } from './categories';
import { products } from './products';
import { status } from './status';

const rootReducers = combineReducers({
  user,
  categories,
  products,
  info,
  status
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
