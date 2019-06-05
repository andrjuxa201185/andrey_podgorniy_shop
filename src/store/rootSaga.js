/* eslint-disable import/no-cycle */
import { all } from 'redux-saga/effects';
import { userWatcher } from './user/sagas';
import { productsWatcher } from './products/sagas';

export function* rootSaga() {
  yield all([
    userWatcher(),
    productsWatcher()
  ]);
}
