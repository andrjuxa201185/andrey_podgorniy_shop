import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EditableField } from '../../components/editableField';
import { server } from '../../services';
import './products.scss';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    server.get('public/products')
      .then(setProducts);
  }, []);

  return (
    <div>
      <h3>Products</h3>
      <ul className="products">
        {
          products.map(({ title, id, image }) => (
            <li key={id} className="product">
              <div className="description">
                <div className="setting">
                  <span>edit</span>
                  <span>X</span>
                </div>
                <Link to={`/products/:${id}`} className="img"><img src={image || './images/bag.png'} alt="" /></Link>
              </div>
              <EditableField type="textarea" val={title} />
            </li>
          ))
        }
      </ul>
      <button>ADD NEW</button>
    </div>
  );
};
