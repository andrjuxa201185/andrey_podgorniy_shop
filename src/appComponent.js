/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { Provider } from 'react-redux';
// import ReactDom from 'react-dom';
// import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUserService } from './services/userService';

import { Header } from './components/header';
import { Pages } from './pages';
import { Main } from './components/main/Main';
import { Loader } from './components/loader';
import { setUser } from './store/user/actions';
// import { store } from './store';

import './main.scss';

export class AppComponent extends Component {
  state = {
    isLoading: false
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp, prevState) {
    const { user } = this.state;

    if (prevState.user && !user) {
      this.props.history.push('/');
    }
  }


  checkUser() {
    this.setState({ isLoading: true });
    checkUserService()
      .then((user) => {
        this.props.dispatch(setUser(user));
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading } = this.state;
    const { user } = this.props;

    return (
      <>
        <Header onLogout={this.onLogout} />
        <Main>
          <Loader shown={isLoading} />
          {
            !isLoading && <Pages onLogin={this.onLogin} />
          }
        </Main>
      </>
    );
  }
}

export const App = connect()(AppComponent);
