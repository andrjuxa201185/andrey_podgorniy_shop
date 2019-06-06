export const SET_CATEGORIES = 'Set categories';
export const SET_CATEGORIES_ASYNC = 'Set categories async';
export const SET_CATEGORY = 'Set category';
export const SET_CATEGORY_ASYNC = 'Set category async';
export const SET_INFO = 'Set info';

export const setCategories = data => ({ type: SET_CATEGORIES, data });
export const setCategoriesAsync = () => ({ type: SET_CATEGORIES_ASYNC });
export const setCategory = data => ({ type: SET_CATEGORY, data });
export const setCategoryAsync = data => ({ type: SET_CATEGORY_ASYNC, data });
export const setInfo = data => ({ type: SET_INFO, data });
