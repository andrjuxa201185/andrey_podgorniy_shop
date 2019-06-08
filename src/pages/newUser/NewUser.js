import { connect } from 'react-redux';
import { Form } from '../../components/form';
import { createUserAsync } from '../../store/user';

export const NewUserComponent = ({ dispatch, history }) => {
  const handleSubmit = (info) => {
    const callback = () => history.push('/succes');
    dispatch(createUserAsync({ info, callback }));
  };

  return (
    <>
      <h1>Update user</h1>
      <Form
        handleSubmit={handleSubmit}
      />
    </>
  );
};

// const mapStateToProps = state => ({

// });

export const NewUser = connect()(NewUserComponent);
