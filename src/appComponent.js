import React from 'react';
import { ToastContainer } from 'react-toastr';
import { connect } from 'react-redux';
import { Header } from './components/header';
import { Pages } from './pages';
import { Main } from './components/main/Main';
import { Loader } from './components/loader';
import { getShopInfoService } from './services/categoriesService';
import './main.scss';
import { setInfo } from './store/categories';
import { setError } from './store/status';
import { setUserAsync } from './store/user';


export class AppComponent extends Component {
  state = {
    isLoading: false
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp) {
    const {
      user, history, status, dispatch
    } = this.props;

    if (prevProp.user && !user) {
      history.push('/');
    }

    if (!prevProp.user && user) {
      this.getInfo();
    }

    if (!prevProp.status && status) {
      this.container.error(
        <strong>{status}</strong>,
        <em>Error!</em>
      );
      dispatch(setError(''));
    }
  }

  getInfo() {
    const { dispatch } = this.props;

    getShopInfoService()
      .then(data => dispatch(setInfo(data)));
  }

  checkUser() {
    const { dispatch } = this.props;
    dispatch(setUserAsync());
  }

  render() {
    const { isLoading } = this.state;
    const { user } = this.props;

    return (
      <>
        <Header />
        <Main>
          <Loader shown={isLoading} />
          {
            !isLoading && <Pages user={user} />
          }
        </Main>

        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
      </>
    );
  }
}

const mapState = state => ({ user: state.user.data, userStatus: state.user.status, status: state.status });

export const App = connect(mapState)(AppComponent);
