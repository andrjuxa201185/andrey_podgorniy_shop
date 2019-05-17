// import { Route, Switch, Redirect } from 'react-router-dom';

import { Userlogin } from './userLogin';
import { Userlogout } from './userLogout';


export const Pages = ({ onLogin, user }) => (
  user
    ? (
      <Userlogin user={user} />
    )
    : (
      <Userlogout onLogin={onLogin} user={user} />
    )
);
