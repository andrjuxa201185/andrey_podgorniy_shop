export const SET_PRODUCTS = 'Set products';
export const SET_PRODUCTS_ASYNC = 'Set products async';
export const SET_PRODUCT = 'Set product';
export const SET_PRODUCT_ASYNC = 'Set product async';
export const REMOVE_PRODUCT = 'Remove product';
export const REMOVE_PRODUCT_ASYNC = 'Remove product async';
export const CREATE_PRODUCT_ASYNC = 'Create product async';
export const UPDATE_PRODUCT_ASYNC = 'Update product async';

export const setProducts = data => ({ type: SET_PRODUCTS, data });
export const setProductsAsunc = () => ({ type: SET_PRODUCTS_ASYNC });
export const setProduct = data => ({ type: SET_PRODUCT, data });
export const setProductAsunc = data => ({ type: SET_PRODUCT_ASYNC, data });
export const remProduct = data => ({ type: REMOVE_PRODUCT, data });
export const remProductAsync = data => ({ type: REMOVE_PRODUCT_ASYNC, data });
export const createProductAsync = data => ({ type: CREATE_PRODUCT_ASYNC, data });
export const updateProductAsync = data => ({ type: UPDATE_PRODUCT_ASYNC, data });
