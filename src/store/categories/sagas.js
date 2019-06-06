import { takeEvery, put, all } from 'redux-saga/effects';
import {
  setCategories,
  SET_CATEGORIES_ASYNC,
  SET_CATEGORY_ASYNC,
  setCategory,
} from './actions';
import { getCategoriesService, getCategoryService } from '../../services/categoriesService';

function* getCategories() {
  try {
    const categories = yield getCategoriesService();
    yield put(setCategories(categories));
  } catch (err) {
    console.log(err);
  }
}

function* getCategory(action) {
  try {
    const category = yield getCategoryService(action.data);
    yield put(setCategory(category));
  } catch (err) {
    console.log(err);
  }
}

export function* categoriesWatcher() {
  yield all([
    yield takeEvery(SET_CATEGORIES_ASYNC, getCategories),
    yield takeEvery(SET_CATEGORY_ASYNC, getCategory),
  ]);
}
