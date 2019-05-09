/* eslint-disable arrow-body-style */
import './main.scss';
import { Tabs, Tab } from '../tabs';
import { Users } from '../users';
import { Images } from '../images';

// eslint-disable-next-line padded-blocks
export const Main = () => {

  return (
    <main className="main main_appearence">
      <Tabs selectedIndex={1}>
        <Tab title="One">
          <Users />
        </Tab>
        <Tab title="Two">
          <Images />
        </Tab>
      </Tabs>
    </main>
  );
};
