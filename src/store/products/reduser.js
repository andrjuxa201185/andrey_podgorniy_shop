import store from '../state';
import { SET_PRODUCTS, SET_PRODUCT } from './actions';

export const products = (state = store.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS: return action.data;
  }

  return state;
};

export const product = (state = store.product, action) => {
  switch (action.type) {
    case SET_PRODUCT: return action.data;
  }

  return state;
};
