import PropTypes from 'prop-types';
import { TabNav } from './TabNav';

export const Tab = () => null;

export class Tabs extends Component {
  // eslint-disable-next-line react/destructuring-assignment
  state = { id: this.props.selectedIndex } // <-- please tell me, how I can this destructuring???

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.selectedIndex.length !== state.id.length) {
      return { id: nextProps.selectedIndex };
    }

    return null;
  }

  static propTypes = {
    selectedIndex: PropTypes.number
  }

  static defaultProps = {
    selectedIndex: 1
  }

  clickTab = (id) => {
    this.setState({ id });
  }

  render() {
    const { id } = this.state;
    const { children } = this.props;
    const tabs = children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title);
    const currentTab = tabs[id] && tabs[id].props.children;

    return (
      <div className="tabs">
        <TabNav
          select={this.clickTab}
          id={id}
          list={links}
        />
        <div className="tab-content">{currentTab}</div>
      </div>
    );
  }
}
