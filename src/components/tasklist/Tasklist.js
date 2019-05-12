import './tasklist.scss';
import { Tabs, Tab } from '../tabs';
import { Todolist } from '../todolist';

export const Tasklist = ({ list }) => {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <Tabs>
      {
        list.map((item, index) => (
          <Tab
            key={index}
            title={days[index]}
          >
            <Todolist list={item} />
          </Tab>
        ))
      }
    </Tabs>
  );
};
