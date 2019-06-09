import { connect } from 'react-redux';
import { useEffect } from 'react';
import { EditableField } from '../../components/editableField';
import { setProduct, setProductAsync, createProductAsync } from '../../store/products';
import './product.scss';

export const ProductComponent = ({
  match,
  dispatch,
  history,
  product
}) => {
  useEffect(() => {
    if (match.params.id !== 'new') {
      dispatch(setProductAsync(match.params.id)); // <== add dispatch
    } else {
      dispatch(setProduct({ title: 'New Product', price: 0 }));
    }

    return () => dispatch(setProduct({}));
  }, []);

  useEffect(() => {
    if (product.id) {
      history.push(`/products/${product.id}`);
    }
  }, [product.id]);

  const getProductField = (field, value) => {
    switch (field) {
      case 'title':
        return dispatch(setProduct({ ...product, title: value }));
      case 'price':
        return dispatch(setProduct({ ...product, price: value }));
      case 'desc':
        return dispatch(setProduct({ ...product, desc: value }));
    }
  };

  const saveNewProduct = () => {
    dispatch(createProductAsync(product));
  };

  return (
    <div className="product-info">
      <h3>
        <EditableField
          onChangeHandler={newVal => getProductField('title', newVal)}
          val={product.title || 'New Product'}
        />
      </h3>

      <div className="price">
        Price:
        <span>
          <EditableField onChangeHandler={newVal => getProductField('price', newVal)} val={product.price || 0} />
        </span>
      </div>

      <div className="description">
        Description:
        <EditableField
          onChangeHandler={newVal => getProductField('desc', newVal)}
          type="textarea"
          val={product.description}
        />
      </div>

      {
        match.params.id === 'new' && <button onClick={saveNewProduct}>SAVE</button>
      }
    </div>
  );
};

const mapStateToProps = state => ({ product: state.product });

export const Product = connect(mapStateToProps)(ProductComponent);
