import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homeAuth.scss';
import { server } from '../../services';

export const HomeAuthComponent = ({ user }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    server.get('shop_info')
      .then(setCategories);
  }, []);

  return (
    <div className="home-auth">
      <p>Hello, {user.firstName}</p>
      <p>You have {categories.categories} categories ({categories.publishedCategories} published)</p>
      <p>You have {categories.products} products</p>
      <Link to="/categories">go to categories</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export const HomeAuth = connect(mapStateToProps)(HomeAuthComponent);
