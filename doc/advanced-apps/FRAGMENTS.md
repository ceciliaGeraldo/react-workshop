# Fragmentos
Un patrón común en React es que un componente devuelva múltiples elementos. Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM.
## Item.js
```javascript
import React from 'react';

const Item = (props) => (
  <React.Fragment>
    <input className="list__check" type="checkbox" checked={props.item.isDone} onChange={(e) => props.handler(e, props.item.id)}/>
    <span className={`list__topic ${props.item.isDone && 'list__done'}`}>{props.item.topic}</span>
  </React.Fragment>
);

export default Item;
```
## List.js
```javascript
import React from 'react';
import Item from './Item';

const List = (props) => (
  <div className="list">
    <div className="list__content">
      {props.list.map(item => (
        <div key={item.id} className="list__item">
          <Item item={item} handler={props.handler} />
        </div>
      ))}
    </div>
  </div>
);

export default List;
```