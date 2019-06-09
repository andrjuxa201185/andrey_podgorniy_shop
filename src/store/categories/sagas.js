import { takeEvery, put, all } from 'redux-saga/effects';
import {
  setCategories,
  SET_CATEGORIES_ASYNC,
  SET_CATEGORY_ASYNC,
  UPDATE_CATEGORY_ASYNC,
  setCategory,
} from './actions';
import {
  getCategoriesService,
  getCategoryService,
  updateCategoryService,
} from '../../services/categoriesService';

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

function* updateCategory(action) {
  try {
    const category = yield updateCategoryService(action.data.id, action.data.category);
    const categories = yield getCategoriesService();
    yield put(setCategory(category));
    yield put(setCategories(categories));
  } catch (error) {
    console.log(error);
  }
}

export function* categoriesWatcher() {
  yield all([
    takeEvery(SET_CATEGORIES_ASYNC, getCategories),
    takeEvery(SET_CATEGORY_ASYNC, getCategory),
    takeEvery(UPDATE_CATEGORY_ASYNC, updateCategory),
  ]);
}
