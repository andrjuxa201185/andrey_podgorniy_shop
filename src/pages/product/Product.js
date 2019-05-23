import { useState, useEffect } from 'react';
import { server } from '../../services';
import { EditableField } from '../../components/editableField';
import './product.scss';

export const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    server.get(`public/products/${match.params.id.slice(1)}`)
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
