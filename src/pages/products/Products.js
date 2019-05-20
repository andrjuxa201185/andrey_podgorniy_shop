import { useState, useEffect } from 'react';
import { server } from '../../services';
import './products.scss';


const Product = (title, id) => (
  <div key={id} className="product">
    <div>
      <span>edit</span>
      <span>X</span>
      <div>image</div>
    </div>
    <h6>{title}</h6>
  </div>
);

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    server.get('public/products')
      // .then(console.log);
      .then(setProducts);
  }, []);

  return (
    <div>
      <h3>Products</h3>
      <div className="products">
        {
          products.map(({ title, id }) => (
            Product(title, id)
          ))
        }
      </div>
      <button>ADD NEW</button>
    </div>
  );
};

// {title: "Marvel Avengers Titan Hero Series Hulk"
// price: "9.7"
// id: 8}
