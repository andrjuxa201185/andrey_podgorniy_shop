import { RenderNums } from '../renderNums/RenderNums';
import './aside.scss';

export const Aside = () => (
  <aside className="aside aside_appearence">
    <RenderNums from={2} to={19} odd />
  </aside>
);
