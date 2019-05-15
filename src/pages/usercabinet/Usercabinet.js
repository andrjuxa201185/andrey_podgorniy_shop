/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './usercabinet.scss';

export const Usercabinet = () => {
  const [name, setName] = useState('Name');
  const [numCategories, setNumCategories] = useState(11);
  const [numPublished, setNumPublished] = useState(3);
  const [numProducts, setNumProducts] = useState(4);

  return (
    <div className="usercabinet">
      <p>Hello, {name}</p>
      <p>You have {numCategories} categories ({numPublished} published)</p>
      <p>You have {numProducts} products</p>
      <a href="/">Go to categories</a>
    </div>
  );
};
