# Context
Regularmente ReactJS permite pasar props de padres a hijos. Pero en ocaciones se da el caso en que una propiedad tiene que ser pasada de padres a hijos a todo lo profundo del arbol de componentes.
Para evitar esta repeticion de codigo y paso infinito de propiedades React nos proporciona una manera de compartir valores entre todos los componentes.
Hagamos un ejemplo algo rebuscado para aprender como usar el contexto.
## Context.js
```javascript
import React from 'react';

export const SnackBarContext = React.createContext('');
```
## SnackBar.js
```javascript
import React from 'react';
import { SnackBarContext } from '../Context';

const SnackBar = (props) => (
  <SnackBarContext.Consumer>
    {snackbarContext => (snackbarContext ?
      <div className="snackbar">
        <span className="snackbar__content">
          {snackbarContext}
        </span>
        <button role="button" className="snackbar__button" onClick={() => {
          props.setMessage('');
        }}>X</button>
      </div>
      : null
    )}
  </SnackBarContext.Consumer>
);

export default SnackBar;
```
Agregamos el componente `SnackBar` nuestro `App.js` para incluir el snackbar
## App.js
```javascript
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import TodayList from './components/TodayList';
import TomorrowList from './components/TomorrowList';
import ErrorBoundary from './components/ErrorBoundary';
import Button from './components/Button';
import SnackBar from './components/SnackBar';
import { SnackBarContext } from './Context';

class App extends Component {
  constructor(props) {
    super(props);
    this.buttonRefCallback = (elem) => { this.buttonRef = elem; };
    this.rollToButton = this.rollToButton.bind(this);
    this.state = {
      message: 'Texto de prueba',
    };
    this.setMessage = (message) => {
      this.setState({ message });
    };
  }

  rollToButton() {
    if (this.buttonRef) {
      this.buttonRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  render() {
    return (
      <div className="App" id="app">
        <SnackBarContext.Provider value={this.state.message}>
          <ErrorBoundary>
            <TodayList title="Lista de hoy" />
          </ErrorBoundary>
          <ErrorBoundary>
            <TomorrowList title="Lista de mañana" setMessage={this.setMessage} />
          </ErrorBoundary>
          <Button
            text="Roll to top!!!"
            buttonRef={this.buttonRefCallback}
            onClick={this.rollToButton}
          />
          <SnackBar setMessage={this.setMessage} />
        </SnackBarContext.Provider>
      </div>
    );
  }
}

export default hot(module)(App);
```
## Item.js
```javascript
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
```