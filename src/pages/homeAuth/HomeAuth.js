import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homeAuth.scss';
import { server } from '../../services';

export const HomeAuth = ({ user }) => {
  const [numCategories, setNumCategories] = useState(0);
  const [numPublished, setNumPublished] = useState(0);
  const [numProducts, setNumProducts] = useState(0);

  useEffect(() => {
    server.get('shop_info')
      .then((info) => {
        setNumCategories(info.categories);
        setNumPublished(info.publishedCategories);
        setNumProducts(info.products);
      });
  }, []);

  return (
    <div className="home-auth">
      <p>Hello, {user.firstName}</p>
      <p>You have {numCategories} categories ({numPublished} published)</p>
      <p>You have {numProducts} products</p>
      <Link to="/categories">go to categories</Link>
    </div>
  );
};
