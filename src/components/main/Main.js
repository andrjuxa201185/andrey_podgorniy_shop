import './main.scss';
import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';

const Error = ({ text, color }) => (
  <mark className={color}>{text}</mark>
);

export const Main = () => (
  <main className="main main_appearence">
    <Aside />
    <Error
      text="Error"
      color="red"
    />
    <Content />
  </main>
);
