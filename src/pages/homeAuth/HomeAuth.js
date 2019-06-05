import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homeAuth.scss';
import { getShopInfoService } from '../../services/categoriesService';

export const HomeAuthComponent = ({ user }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getShopInfoService()
      .then((r) => {
        setCategories(r);
      });
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
  user: state.user.data
});

export const HomeAuth = connect(mapStateToProps)(HomeAuthComponent);
