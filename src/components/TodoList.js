import React from 'react';
import List from './List';

const TodoList = (props) => {
  return (
    <div>
      <h1>{props.title || `To-do list for ${props.name}`}</h1>
      <List list={props.list} handler={props.handler} setMessage={props.setMessage} />
    </div>
  );
};

export default TodoList;