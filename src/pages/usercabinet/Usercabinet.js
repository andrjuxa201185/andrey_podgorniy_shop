import { useState, useEffect } from 'react';
import './usercabinet.scss';

export const Usercabinet = ({ user }) => {
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
    <div className="usercabinet">
      <p>Hello, {name}</p>
      <p>You have {numCategories} categories ({numPublished} published)</p>
      <p>You have {numProducts} products</p>
      <a href="/">Go to categories</a>
    </div>
  );
};
