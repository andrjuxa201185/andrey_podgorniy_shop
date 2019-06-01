import store from '../state';
import {
  SET_CATEGORIES,
  SET_CATEGORY,
  REMOVE_CATEGORIES,
  SET_INFO
} from './actions';

export const categories = (state = store.categories, action) => {
  switch (action.type) {
    case SET_CATEGORIES: return action.data;
    case REMOVE_CATEGORIES: return [];
  }

  return state;
};

export const category = (state = store.category, action) => {
  switch (action.type) {
    case SET_CATEGORY: return action.data;
    case REMOVE_CATEGORIES: return [];
  }

  return state;
};

export const info = (state = store.info, action) => {
  if (action.type === SET_INFO) {
    return action.data;
  }

  return state;
};
