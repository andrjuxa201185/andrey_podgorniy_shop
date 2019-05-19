// import { useState, useEffect } from 'react';
// import { server } from '../../services';
import './categories.scss';

export const Categories = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   server.get('shop_info')
  //     .then(console.log);
  // }, []);

  return (
    <div className="page-categories">
      <h3>Categories</h3>

      <button>ADD NEW</button>
    </div>
  );
};
