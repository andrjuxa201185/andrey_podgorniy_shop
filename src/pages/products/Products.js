/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/order */
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EditableField } from '../../components/editableField';
import {
  getProductsService,
  deleteProductService,
  updateProductsService
} from '../../services/productService';
import './products.scss';
import { setProducts } from '../../store/products';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';


export const ProductsComponent = ({ products, dispatch, history }) => {
  const [editId, setEditId] = useState();

  useEffect(() => {
    getProductsService()
      .then(resp => dispatch(setProducts(resp)));
  }, []);

  const setEditTitle = (e, id) => {
    e.stopPropagation();
    editId ? setEditId(undefined) : setEditId(id);
  };

  const delProduct = (e, id) => {
    e.stopPropagation();
    deleteProductService(id)
      .then(console.log);
  };

  const onBlurHandler = (id, value) => {
    const product = products.find(item => item.id === id);
    product.title = value;

    updateProductsService(id, product)
      .then(() => {
        getProductsService()
          .then(resp => dispatch(setProducts(resp)));
      });
  };

  const onClickHandler = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div>
      <h3>Products</h3>
      <ul className="products">
        {
          products.map(({ title, id, image }) => (
            <li key={id} className="product">
              <div className="description">
                <div className="setting">
                  <span className="edit" onClick={e => setEditTitle(e, id)}><FaEdit /></span>
                  <span className="del" onClick={e => delProduct(e, id)}><FaRegTrashAlt /></span>
                </div>
                <Link to={`/products/${id}`} className="img"><img src={image || './images/bag.png'} alt="" /></Link>
              </div>
              <EditableField
                type="textarea"
                val={title}
                editState={id === editId}
                onBlurHandler={title => onBlurHandler(id, title)}
                onClickHandler={() => onClickHandler(id)}
              />
            </li>
          ))
        }
      </ul>
      <button>ADD NEW</button>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export const Products = connect(mapStateToProps)(ProductsComponent);
