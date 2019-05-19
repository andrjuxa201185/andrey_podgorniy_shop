// import { Route, Switch, Redirect } from 'react-router-dom';

import { Private } from './Private';
import { Public } from './Public';


export const Pages = ({ onLogin, user }) => (
  user
    ? (
      <Private user={user} />
    )
    : (
      <Public onLogin={onLogin} />
    )
);
