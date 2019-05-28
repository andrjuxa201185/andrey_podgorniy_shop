import store from '../state';
import { SET_CATEGORIES } from './actions';

export const categories = (state = store.categories, action) => {
  switch (action.type) {
    case SET_CATEGORIES: return action.data;
  }

  return state;
};
