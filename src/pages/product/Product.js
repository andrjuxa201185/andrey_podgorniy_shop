import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { EditableField } from '../../components/editableField';
import { getProductService } from '../../services/productService';
import { setProduct } from '../../store/products';
import './product.scss';

export const ProductComponent = ({ match, dispatch }) => {
  const [productState, setProductToState] = useState({});

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

  return (
    <div className="product-info">
      <h3><EditableField val={productState.title || 'New Product'} /></h3>
      <div className="price">Price: <span><EditableField val={productState.price || 0} /></span></div>
      <div className="description">Description:<EditableField type="textarea" val={productState.description} /></div>
      {
        match.params.id === 'new' && <button>SAVE</button>
      }
    </div>
  );
};

export const Product = connect()(ProductComponent);
