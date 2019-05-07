/* eslint-disable no-console */
import './main.scss';
import { Form } from '../form';
import { EditableField } from '../editableField/EditableField';
import { Todo } from '../todo/Todo';

export const Main = () => {
  const fn = (text) => {
    console.log(text);
  };

  return (
    <main className="main main_appearence">
      <Form />
      <EditableField fn={fn} />
      <Todo />
    </main>
  );
};
