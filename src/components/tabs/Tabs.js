import { useState } from 'react';
import { TabNav } from './TabNav';

export const Tab = () => null;

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
