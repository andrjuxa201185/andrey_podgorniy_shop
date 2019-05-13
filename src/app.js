import React from 'react';
import ReactDom from 'react-dom';

import { Main } from './components/main/Main';
import { Tasklist } from './components/tasklist';
import { Usercabinet } from './components/usercabinet';
import './components/style/__variables.scss';

const App = () => {
  const list = [
    [{
      description: "Read 'Eloquent javascript'", title: 'Read book', day: 0, id: '00', done: true
    }, {
      title: 'Write new article', day: 0, id: '01', done: true
    }, {
      title: 'Do exercises', day: 0, id: '02', done: true
    }, { title: 'Cleaning Room', day: 0, id: '03' }, {
      title: 'Read road rules', day: '0', id: '01544369036785', done: false, description: '1-3 items'
    }], [{
      title: 'Make homework', day: 1, id: '10', done: false
    }, {
      title: 'Some new task', description: 'Task for test purposes', id: '11526855381117', day: '1'
    }], [{
      description: '', title: 'Go to gym', day: '2', id: '20'
    }, {
      description: 'I need this!', title: 'Play PC', day: '2', id: '21'
    }], [{
      title: 'Прийти на работу', description: 'Не хоцца', id: '30', day: '3'
    }], [{
      title: 'Visit a doctor', description: 'Go to therapist to check my stomach', id: '40', day: '4', done: false
    }, {
      title: 'Meet Red John', id: '41', day: '4', done: true
    }], [{
      title: 'Visit grandmother', day: 5, id: '50', done: true, description: ''
    }, {
      title: 'Visit Easycode', id: '52', day: '5', done: false, description: ''
    }, {
      title: "Check student's homework", day: '5', id: '53', done: true
    }, {
      title: 'New Test', description: '', id: '51526658181443', day: '5'
    }], [{
      title: 'Watch cartoons', day: 6, id: '60', done: false
    }]
  ];

  return (
    <>
      <Main />
      <Tasklist list={list} />
      <Usercabinet
        name="John"
        numCategories={10}
        numPublished={3}
        numProducts={5}
      />
    </>
  );
};

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
