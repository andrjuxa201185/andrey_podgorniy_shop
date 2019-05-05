/* eslint-disable no-console */
import './main.scss';
import { Form } from '../form';
import { EditableField } from '../editableField/EditableField';

export const Main = () => (
  <main className="main main_appearence">
    <Form />
    <EditableField fn={console.log} />
  </main>
);
