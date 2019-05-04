import './main.scss';
import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';
import { Form } from '../form';

export const Main = () => (
  <main className="main main_appearence">
    <Aside />
    <Content />
    <Form />
  </main>
);
