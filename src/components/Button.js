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