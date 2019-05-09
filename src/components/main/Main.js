/* eslint-disable arrow-body-style */
import './main.scss';
import { Tabs, Tab } from '../tabs';
import { Users } from '../users';

// eslint-disable-next-line padded-blocks
export const Main = () => {

  return (
    <main className="main main_appearence">
      <Tabs>
        <Tab title="One">
          <Users />
        </Tab>
        <Tab title="Two">
          <h2>title2</h2>
          <p>Lorem ipsumrehsr dolor sit ame</p>
        </Tab>
      </Tabs>
    </main>
  );
};
