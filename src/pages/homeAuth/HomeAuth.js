import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homeAuth.scss';

export const HomeAuth = ({ user }) => {
  const [name, setName] = useState('');
  const [numCategories, setNumCategories] = useState(0);
  const [numPublished, setNumPublished] = useState(0);
  const [numProducts, setNumProducts] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8086/shop_info', {
      credentials: 'include'
    })
      .then(r => r.json())
      .then((info) => {
        setName(user.firstName);
        setNumCategories(info.categories);
        setNumPublished(info.publishedCategories);
        setNumProducts(info.products);
      });
  }, []);

  return (
    <div className="home-auth">
      <p>Hello, {name}</p>
      <p>You have {numCategories} categories ({numPublished} published)</p>
      <p>You have {numProducts} products</p>
      <Link to="/categories">go to categories</Link>
    </div>
  );
};
