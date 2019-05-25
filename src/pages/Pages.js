import { connect } from 'react-redux';
import { Private } from './Private';
import { Public } from './Public';


export const PagesComponent = ({ onLogin, user }) => (
  user
    ? (
      <Private user={user} />
    )
    : (
      <Public onLogin={onLogin} />
    )
);

const mapState = state => ({ user: state.user });

export const Pages = connect(mapState)(PagesComponent);
