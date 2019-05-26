import { server } from './index';

export const getProductsService = () => server.get('public/products');
export const getProductService = id => server.get(`public/products/${id}`);
export const createProductsService = data => server.post('products', data);
export const updateProductsService = (id, data) => server.put(`products/${id}`, data);
export const uploadImageProductService = (id, data) => server.post(`products/${id}/upload`, data);
