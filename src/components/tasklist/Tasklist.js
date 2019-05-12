import { useState, useEffect } from 'react';
import './tasklist.scss';
import { Tabs, Tab } from '../tabs';
import { Todolist } from '../todolist';

export const Tasklist = ({ list }) => {
  const [day, setDay] = useState((new Date().getDay() + 6) % 7);

  useEffect(() => {
    setDay((new Date().getDay() + 6) % 7);
  }, [new Date().getDay()]);

  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <Tabs selectedIndex={day}>
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
