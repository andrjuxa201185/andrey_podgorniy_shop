import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { EditableField } from '../../components/editableField';
import { getProductService } from '../../services/productService';
import { setProduct } from '../../store/products';
import './product.scss';

export const ProductComponent = ({ match, dispatch }) => {
  const [productState, setProductToState] = useState({});

  useEffect(() => {
    getProductService(match.params.id)
      .then((respProd) => {
        setProductToState(respProd);
        dispatch(setProduct(respProd));
      });

    return () => dispatch(setProduct(null));
  }, []);

  return (
    <div className="product-info">
      <h3>{productState.title}</h3>
      <div className="price">Price: <span><EditableField val={productState.price} /></span></div>
      <div className="description">Description:<EditableField type="textarea" val={productState.description} /></div>
      <button>SAVE</button>
    </div>
  );
};

export const Product = connect()(ProductComponent);
