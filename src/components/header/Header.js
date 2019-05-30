/* eslint-disable padded-blocks */
import { connect } from 'react-redux';
import './header.scss';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';
import { removeUser } from '../../store/user';

// eslint-disable-next-line arrow-body-style
export const HeaderComponent = ({ user, removeUser, info }) => {

  return (
    <header className="header">
      <Link to="/" className="header-logo"><img src="/images/logo.png" alt="todo" /></Link>
      <Navigation user={user} info={info} onLogout={removeUser} />
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  removeUser() {
    dispatch(removeUser());
  },
});

const mapToProps = state => ({
  user: state.user,
  info: state.info
});

export const Header = connect(mapToProps, mapDispatchToProps)(HeaderComponent);
