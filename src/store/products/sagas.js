/* eslint-disable no-console */
import { takeEvery, put, all } from 'redux-saga/effects';
import {
  SET_PRODUCTS_ASYNC,
  setProducts,
  setProduct,
  SET_PRODUCT_ASYNC,
  REMOVE_PRODUCT_ASYNC,
  remProduct,
  CREATE_PRODUCT_ASYNC,
  UPDATE_PRODUCT_ASYNC,
} from './actions';

import {
  getProductsService,
  getProductService,
  deleteProductService,
  createProductsService,
  updateProductsService
} from '../../services/productService';

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

function* deleteProduct(action) {
  try {
    yield deleteProductService(action.data);
    yield put(remProduct(action.data));
  } catch (err) {
    console.log(err);
  }
}

function* createNewProduct(action) {
  try {
    const newProduct = yield createProductsService(action.data);
    yield put(setProduct(newProduct));
  } catch (err) {
    console.log(err);
  }
}

function* updateProduct(action) {
  try {
    yield updateProductsService(action.data.id, action.data);
    // const products = yield getProductsService();
    // yield put(setProducts(products));
  } catch (err) {
    console.log(err);
  }
}

export function* productsWatcher() {
  yield all([
    yield takeEvery(SET_PRODUCTS_ASYNC, getProducts),
    yield takeEvery(SET_PRODUCT_ASYNC, getProduct),
    yield takeEvery(REMOVE_PRODUCT_ASYNC, deleteProduct),
    yield takeEvery(CREATE_PRODUCT_ASYNC, createNewProduct),
    yield takeEvery(UPDATE_PRODUCT_ASYNC, updateProduct),
  ]);
}
