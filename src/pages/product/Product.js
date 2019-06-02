import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { EditableField } from '../../components/editableField';
import { getProductService, createProductsService } from '../../services/productService';
import { setProduct } from '../../store/products';
import './product.scss';

export const ProductComponent = ({ match, dispatch, history }) => {
  const [productState, setProductToState] = useState({});
  const idNewProduct = new Date().getTime();

  useEffect(() => {
    if (match.params.id !== 'new') {
      getProductService(match.params.id)
        .then((respProd) => {
          setProductToState(respProd);
          dispatch(setProduct(respProd));
        });
    }
    return () => dispatch(setProduct(null));
  }, []);

  const getProductField = (field, value) => {
    switch (field) {
      case 'title':
        return setProductToState(productState => ({ ...productState, title: value, id: idNewProduct }));
      case 'price':
        return setProductToState(productState => ({ ...productState, price: value, id: idNewProduct }));
      case 'desc':
        return setProductToState(productState => ({ ...productState, description: value, id: idNewProduct }));
    }
  };

  const saveNewProduct = () => {
    createProductsService(productState)
      .then(() => history.push(`/products/${idNewProduct}`));
  };

  return (
    <div className="product-info">
      <h3>
        <EditableField
          onChangeHandler={newVal => getProductField('title', newVal)}
          val={productState.title || 'New Product'}
        />
      </h3>

      <div className="price">
        Price:
        <span>
          <EditableField onChangeHandler={newVal => getProductField('price', newVal)} val={productState.price || 0} />
        </span>
      </div>

      <div className="description">
        Description:
        <EditableField
          onChangeHandler={newVal => getProductField('desc', newVal)}
          type="textarea"
          val={productState.description}
        />
      </div>

      {
        match.params.id === 'new' && <button onClick={saveNewProduct}>SAVE</button>
      }
    </div>
  );
};

export const Product = connect()(ProductComponent);
