import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { EditableField } from '../../components/editableField';
import './products.scss';
import {
  updateProductAsync,
  setProductsAsunc,
  remProductAsync
} from '../../store/products';
import { Modal } from '../../components/modal';


export const ProductsComponent = ({ products, dispatch, history }) => {
  const [editId, setEditId] = useState();
  const [warning, setWarning] = useState('');
  const [removeId, setRemoveId] = useState('');

  useEffect(() => {
    dispatch(setProductsAsunc()); // <=== add dispatch
  }, []);

  const setEditTitle = (e, id) => {
    e.stopPropagation();
    editId ? setEditId(undefined) : setEditId(id);
  };

  const delProduct = (id) => {
    dispatch(remProductAsync(id));
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
    dispatch(updateProductAsync(product));
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
        onConfirm={() => delProduct(removeId)}
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
                  <span className="del" onClick={() => showModal(id, title)}><FaRegTrashAlt /></span>
                </div>
                <Link to={`/products/${id}`} className="img"><img src={image || './images/bag.png'} alt="" /></Link>
              </div>
              <EditableField
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
