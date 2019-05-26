import React from 'react';
import { connect } from 'react-redux';
import { checkUserService } from './services/userService';
import { Header } from './components/header';
import { Pages } from './pages';
import { Main } from './components/main/Main';
import { Loader } from './components/loader';
import { setUser } from './store/user/actions';
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
    const history = this.props;

    if (prevState.user && !user) {
      history.push('/');
    }
  }


  checkUser() {
    const dispatch = this.props;

    this.setState({ isLoading: true });
    checkUserService()
      .then((user) => {
        dispatch(setUser(user));
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading } = this.state;

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
