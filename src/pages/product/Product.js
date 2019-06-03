import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { EditableField } from '../../components/editableField';
import { getProductService, createProductsService } from '../../services/productService';
import { setProduct } from '../../store/products';
import './product.scss';

export const ProductComponent = ({
  match,
  dispatch,
  history,
  product
}) => {
  // const [productState, setProductToState] = useState({});
  const idNewProduct = new Date().getTime();

  useEffect(() => {
    if (match.params.id !== 'new') {
      getProductService(match.params.id)
        .then((respProd) => {
          // setProductToState(respProd);
          dispatch(setProduct(respProd));
        });
    }

    return () => dispatch(setProduct({}));
  }, []);

  const getProductField = (field, value) => {
    switch (field) {
      case 'title':
        // return setProductToState(productState => ({ ...productState, title: value, id: idNewProduct }));
        return dispatch(setProduct({ ...product, title: value, id: idNewProduct }));
      case 'price':
        // return setProductToState(productState => ({ ...productState, price: value, id: idNewProduct }));
        return dispatch(setProduct({ ...product, price: value, id: idNewProduct }));
      case 'desc':
        // return setProductToState(productState => ({ ...productState, description: value, id: idNewProduct }));
        return dispatch(setProduct({ ...product, desc: value, id: idNewProduct }));
    }
  };

  const saveNewProduct = () => {
    createProductsService(product)
      .then(() => history.push(`/products/${idNewProduct}`));
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
