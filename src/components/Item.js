import React from 'react';
import { SnackBarContext } from '../Context';

const Item = (props) => (
  <React.Fragment>
    <SnackBarContext.Consumer>
      {snackbarContext =>
        <input disabled={!!snackbarContext} className="list__check" type="checkbox" checked={props.item.isDone} onChange={(e) => {
          props.handler(e, props.item.id);
          props.setMessage(`${props.item.topic} ${props.item.isDone ? 'NOT' : ''} done!!!`);
        }}/>
      }
    </SnackBarContext.Consumer>
    <span className={`list__topic ${props.item.isDone && 'list__done'}`}>{props.item.topic}</span>
  </React.Fragment>
);

export default Item;