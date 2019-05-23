import { useState, useEffect } from 'react';
import { EditableField } from '../../components/editableField';
import { getProductService } from '../../services/productService';
import './product.scss';

export const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductService(match.params.id)
      .then(setProduct);
  }, []);

  return (
    <div className="product-info">
      <h3>{product.title}</h3>
      <p>Price: <span>${product.price}</span></p>
      <EditableField type="textarea" val="description" />
      <button>SAVE</button>
    </div>
  );
};
