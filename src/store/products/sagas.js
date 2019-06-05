/* eslint-disable no-console */
import { takeEvery, put, all } from 'redux-saga/effects';
import {
  SET_PRODUCTS_ASYNC,
  setProducts,
  setProduct,
  SET_PRODUCT_ASYNC
} from './actions';

import { getProductsService, getProductService } from '../../services/productService';

function* getProducts() {
  try {
    const products = yield getProductsService();
    yield put(setProducts(products));
  } catch (err) {
    console.log(err);
  }
}

function* getProduct(action) {
  try {
    const product = yield getProductService(action.data);
    yield put(setProduct(product));
  } catch (err) {
    console.log(err);
  }
}

export function* productsWatcher() {
  yield all([
    yield takeEvery(SET_PRODUCTS_ASYNC, getProducts),
    yield takeEvery(SET_PRODUCT_ASYNC, getProduct),
  ]);
}
