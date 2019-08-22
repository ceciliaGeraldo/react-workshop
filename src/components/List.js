import React from 'react';
import Item from './Item';

const List = (props) => (
  <div className="list">
    <div className="list__content">
      {props.list.map(item => (
        <div key={item.id} className="list__item">
          <Item item={item} handler={props.handler} setMessage={props.setMessage}/>
        </div>
      ))}
    </div>
  </div>
);

export default List;