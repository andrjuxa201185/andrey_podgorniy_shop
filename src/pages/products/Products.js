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
import { setProducts, setProductsAsunc } from '../../store/products';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from '../../components/modal';


export const ProductsComponent = ({ products, dispatch, history }) => {
  const [editId, setEditId] = useState();
  const [warning, setWarning] = useState('');
  const [removeId, setRemoveId] = useState('');

  useEffect(() => {
    dispatch(setProductsAsunc());
  }, []);

  const setEditTitle = (e, id) => {
    e.stopPropagation();
    editId ? setEditId(undefined) : setEditId(id);
  };

  const delProduct = () => {
    deleteProductService(removeId)
      .then(console.log);
  };

  const showModal = (removeId, title) => {
    setWarning(`You are going to remove product ${title}`);
    setRemoveId(removeId);
  };

  const hideModal = () => {
    setWarning('');
    setRemoveId('');
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
      <Modal
        open={!!warning}
        close={hideModal}
        onConfirm={delProduct}
      >
        {warning}
      </Modal>
      <ul className="products">
        {
          products.map(({ title, id, image }) => (
            <li key={id} className="product">
              <div className="description">
                <div className="setting">
                  <span className="edit" onClick={e => setEditTitle(e, id)}><FaEdit /></span>
                  {/* <span className="del" onClick={e => delProduct(e, id)}><FaRegTrashAlt /></span> */}
                  <span className="del" onClick={() => showModal(id, title)}><FaRegTrashAlt /></span>
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
      <Link className="btn" to="/products/new">ADD NEW</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export const Products = connect(mapStateToProps)(ProductsComponent);
