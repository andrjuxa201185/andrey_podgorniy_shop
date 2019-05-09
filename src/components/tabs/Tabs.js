import { TabNav } from './TabNav';

export const Tab = () => null;

export class Tabs extends Component {
  state = { id: 0 }

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
