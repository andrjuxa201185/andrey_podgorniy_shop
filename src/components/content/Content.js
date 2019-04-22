import { Greeting } from '../greeting/Greeting';
import './content.scss';

export const Content = () => (
  <section className="content content_appearence">
    <h2 className="content__title">main</h2>
    <div className="content__desc">
      <Greeting name="Andrey" />
    </div>
  </section>
);
