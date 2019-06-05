export const SET_USER = 'Set user';
export const REMOVE_USER = 'Remove user';
export const LOGIN_USER_ASYNC = 'Login user async';
export const SET_USER_ASYNC = 'Set user async';

export const setUser = data => ({ type: SET_USER, data });
export const setUserAsync = () => ({ type: SET_USER_ASYNC });
export const loginUserAsync = data => ({ type: LOGIN_USER_ASYNC, data });
export const removeUser = () => ({ type: REMOVE_USER });
