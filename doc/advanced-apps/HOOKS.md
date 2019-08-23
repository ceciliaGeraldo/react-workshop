# Hooks
**¿Qué es un Hook?** Un Hook es una función especial que permite “engancharte” a características de React. Por ejemplo, `useState` es un Hook que te permite añadir el estado de React a un componente funcional. 
**¿Cuándo debería usar un Hook?** Si creas un componente funcional y descubres que necesitas añadirle estado, antes había que crear una clase. Ahora puedes usar un Hook dentro de un componente funcional existente.
## Hook de estado
### Button.js
```javascript
import React, { useState } from 'react';

const Button = (props) => {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <button className="button__roll" onClick={props.onClick} ref={props.buttonRef} >{props.text}</button>
      <button className="button__roll" onClick={() => setCount(count + 1)} >You clicked {count} times</button>
    </React.Fragment>
  );
};

export default Button;
```
**¿Qué hace la llamada a useState?** Declara una “variable de estado” y una función para cambiar dicha variable. `useState` es una nueva forma de usar exactamente las mismas funciones que `this.state` nos da en una clase.
**¿Qué pasamos a `useState` como argumento?** El único argumento para el Hook `useState()` es el estado inicial. Si queremos guardar dos valores distintos en el estado, llamariamos a useState() dos veces.
**¿Qué devuelve `useState`?** Devuelve una pareja de valores: el estado actual y una función que lo actualiza.
La sintaxis de desestructuración de un array nos permite dar diferentes nombres a las variables de estado que declaramos llamando a useState.
Los hooks resuelven una variedad de problemas que se dan en el desarrollo de aplicaciones con React:
- Es difícil reutilizar la lógica de estado entre componentes
- Los componentes complejos se vuelven difíciles de entender
- Las clases confunden tanto a las personas como a las máquinas
## Hook de efecto
El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales.
### Button.js
```javascript
import React, { useState, useEffect } from 'react';

const Button = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${count} times`;
  });

  const [background, setBackground] = useState('green');
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    if (background === 'red') setColor('green');
    if (background === 'green') setColor('red');
  });

  const [color, setColor] = useState('red');

  return (
    <React.Fragment>
      <button className="button__roll" onClick={props.onClick} ref={props.buttonRef} >{props.text}</button>
      <button className="button__roll" onClick={() => setCount(count + 1)} >You clicked {count} times</button>
      <button className="button__roll" style={{ backgroundColor: background }} onClick={() => setBackground(color)}>Paint it {color}</button>
    </React.Fragment>
  );
};

export default Button;
```
Cuando llamas a useEffect, le estás diciendo a React que ejecute tu función de “efecto” después de vaciar los cambios en el DOM. Los efectos se declaran dentro del componente para que tengan acceso a sus props y estado. De forma predeterminada, React ejecuta los efectos después de cada renderizado.
Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, el Hook `useEffect` equivale a `componentDidMount`, `componentDidUpdate` y `componentWillUnmount` combinados.
**¿Qué hace `useEffect`?** Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse.
**¿Por qué se llama a `useEffect` dentro del componente?** Poner `useEffect` dentro del componente nos permite acceder a la variable de estado `count` (o a cualquier prop) directamente desde el efecto.
**¿Se ejecuta `useEffect` después de cada renderizado?** ¡Sí! Por defecto se ejecuta después del primer renderizado y después de cada actualización. React se asegura de que el DOM se ha actualizado antes de llevar a cabo el efecto.
## Reglas de hooks
- Solo llamar Hooks en el nivel superior. No llames Hooks dentro de loops, condiciones o funciones anidadas.
- Solo llamar Hooks desde componentes funcionales de React. No llames Hooks desde las funciones regulares de JavaScript.
- Cuando un Hook de efecto retorna una funcion, esta se ejecuta al momento de desmonte del componente
## Hook de contexto
```javascript
const value = useContext(MyContext);
```
Acepta un objeto de contexto (el valor devuelto de `React.createContext`) y devuelve el valor de contexto actual. Cuando el `<MyContext.Provider>` más cercano arriba del componente se actualiza, el Hook activa una renderización con el `value` del contexto pasado a ese proveedor `MyContext`.
No olvides que el argumento a `useContext` debe ser el objeto del contexto en sí mismo.
```javascript
useContext(MyContext); // correcto
useContext(MyContext.Consumer); // incorrecto
useContext(MyContext.Provider); // incorrecto
```
