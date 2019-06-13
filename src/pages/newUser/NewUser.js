import { connect } from 'react-redux';
import { createUserAsync } from '../../store/user';
import { Form } from '../../components/form';

import './newUser.scss';

export const NewUserComponent = ({ dispatch, history }) => {
  const handleSubmit = (info) => {
    const callback = () => history.push('/success');
    dispatch(createUserAsync({ info, callback }));
  };

  return (
    <>
      <h1>Create new user</h1>
      <Form handleSubmit={handleSubmit} />
    </>
  );
};

export const NewUser = connect()(NewUserComponent);
