# Hooks reducer
## useReducer
```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
Una alternativa a `useState`. Acepta un `reducer` de tipo `(state, action) => newState` y devuelve el estado actual emparejado con un método `dispatch`.
`useReducer` a menudo es preferible a `useState` cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior. `useReducer` además te permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks.
Aquí está el ejemplo del contador de la sección [useState], reescrito para usar un reductor:
```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    <React.Fragment/>
  );
};

export default Counter;
```
## Evitar un dispatch
Si devuelves el mismo valor del estado actual desde un Hook reductor, React evitará el renderizado de los hijos y disparar efectos.

