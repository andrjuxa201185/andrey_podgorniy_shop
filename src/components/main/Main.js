/* eslint-disable arrow-body-style */
import './main.scss';
import { Tabs, Tab } from '../tabs';
import { Users } from '../users';
import { Images } from '../images';
import { ProductInfo } from '../productInfo';
// eslint-disable-next-line padded-blocks
export const Main = () => {

  return (
    <main className="main main_appearence">
      <Tabs>
        <Tab title="One">
          <Users />
        </Tab>
        <Tab title="Two">
          <Images />
        </Tab>
      </Tabs>
      <ProductInfo />
    </main>
  );
};
