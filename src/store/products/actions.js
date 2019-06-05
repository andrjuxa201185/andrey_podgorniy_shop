export const SET_PRODUCTS = 'Set products';
export const SET_PRODUCTS_ASYNC = 'Set products async';
export const SET_PRODUCT_ASYNC = 'Set product async';
export const SET_PRODUCT = 'Set product';
export const REMOVE_PRODUCT = 'Remove product';

export const setProducts = data => ({ type: SET_PRODUCTS, data });
export const setProductsAsunc = () => ({ type: SET_PRODUCTS_ASYNC });
export const setProductAsunc = data => ({ type: SET_PRODUCT_ASYNC, data });
export const setProduct = data => ({ type: SET_PRODUCT, data });
export const remProduct = data => ({ type: REMOVE_PRODUCT, data });
