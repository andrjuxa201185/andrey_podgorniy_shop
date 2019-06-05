import store from '../state';
import { SET_USER, REMOVE_USER } from './actions';

export const user = (state = store.user, action) => {
  switch (action.type) {
    case SET_USER: return {
      data: action.data,
      staus: {
        loading: false,
        error: ''
      }
    };
    case REMOVE_USER: return store.user;
  }

  return state;
};
