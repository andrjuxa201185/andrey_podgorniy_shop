/* eslint-disable react/destructuring-assignment */
// import PropTypes from 'prop-types';
import { useState } from 'react';
import { TabNav } from './TabNav';

export const Tab = () => null;

// export class Tabs extends Component {
//   state = { id: undefined }

//   componentDidUpdate(prevProps) {
//     const { selectedIndex } = this.props;
//     if (prevProps.selectedIndex !== selectedIndex) {
//       // eslint-disable-next-line react/no-did-update-set-state
//       this.setState({ id: selectedIndex });
//     }

//     return null;
//   }

//   componentDidMount() {
//     this.setState({ id: this.props.selectedIndex });
//   }

//   static propTypes = {
//     selectedIndex: PropTypes.number
//   }

//   static defaultProps = {
//     selectedIndex: 1
//   }

//   clickTab = (id) => {
//     this.setState({ id });
//   }

//   render() {
//     const { id } = this.state;
//     const { children } = this.props;
//     const tabs = children.filter(child => child.type === Tab);
//     const links = tabs.map(tab => tab.props.title);
//     const currentTab = tabs[id] && tabs[id].props.children;

//     return (
//       <div className="tabs">
//         <TabNav
//           select={this.clickTab}
//           id={id}
//           list={links}
//         />
//         <div className="tab-content">{currentTab}</div>
//       </div>
//     );
//   }
// }

export const Tabs = ({ selectedIndex = 1, children }) => {
  const [id, setId] = useState(selectedIndex);

  const clickTab = id => setId(id);

  const tabs = children.filter(child => child.type === Tab);
  const links = tabs.map(tab => tab.props.title);
  const currentTab = tabs[id] && tabs[id].props.children;

  return (
    <div className="tabs">
      <TabNav
        select={clickTab}
        id={id}
        list={links}
      />
      <div className="tab-content">{currentTab}</div>
    </div>
  );
};
