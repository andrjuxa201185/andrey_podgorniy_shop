/* eslint-disable no-console */

import { takeEvery, put, all } from 'redux-saga/effects';
import {
  setUser,
  SET_USER_ASYNC,
  LOGIN_USER_ASYNC,
  setUserBegin
} from './actions';
import { checkUserService, loginUserService } from '../../services/userService';

function* fetchUser() {
  yield put(setUserBegin());
  try {
    const user = yield checkUserService();
    yield put(setUser(user));
  } catch (err) {
    console.log(err);
  }
}

function* loginUser(action) {
  try {
    const user = yield loginUserService(action.data);
    yield put(setUser(user));
  } catch (err) {
    console.log(err);
  }
}

export function* userWatcher() {
  yield all([
    yield takeEvery(SET_USER_ASYNC, fetchUser),
    yield takeEvery(LOGIN_USER_ASYNC, loginUser),
  ]);
}
