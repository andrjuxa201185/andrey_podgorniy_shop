/* eslint-disable padded-blocks */
import './main.scss';
import { Tabs, Tab } from '../tabs';

// eslint-disable-next-line arrow-body-style
export const Main = () => {

  return (
    <main className="main main_appearence">
      <Tabs>
        <Tab title="One">
          <h2>title1</h2>
          <p>Lorem ipsum dolor sit ame</p>
        </Tab>
        <Tab title="Two">
          <h2>title2</h2>
          <p>Lorem ipsumrehsr dolor sit ame</p>
        </Tab>
      </Tabs>
    </main>
  );
};
