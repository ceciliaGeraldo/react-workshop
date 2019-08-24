## Jest

Jest es una framework de testing enfocado en la simplicidad,  fue desarrollado por el equipo de Facebook, aunque nace en el contexto de React, no es un framework exclusivo para React.

## Instalación & configuración

Instalamos jest por medio de NPM.

`npm install --save-dev jest babel-jest`

Además debemos agregar un paquete utilitario que nos ayuda a tomar un `snapshot` de nuestros componentes.

`npm install --save-dev react-test-renderer`

Modificamos nuestro `package.js` la fase de test.

`"test": "jest"`

Creamos una nueva carpeta `__tests__` en nuestra carpeta `src`, esto por que Jest por defecto mira dentro de la carpeta `__tests__` para correr todos los test presentes en esa carpeta.

Para ejecutar los test debemos ejecutar.
`npm run test`

## Preparando nuestro primer test

Vamos a modificar nuestro `src/App.js` para crear nuestro primer test.

```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Show</button>
      </div>
    );
  }
}

export default App;
```

Quedó como un componente `App` con un simple show button.
Vamos por nuestro primer snapshot test. 

### Que es un Snapshot Test?

Un `Snapshot Test` típicamente se hace sobre un componente, se toma una instantánea que se guarda en un archivo y cuando se ejecutan los test se crea una instantánea del momento y se compara con el archivo, si ambos no coinciden nuestros test fallan.

Ahora  creamos un nuevo archivo al cual llamaremos `App.test.js` en nuestra carpeta `src/__tests__`.

```
import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer'

describe('My first snapshot test',()=>{
    test('testing app button', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
```

Ahora ejecutamos nuestro test con el comando.
`npm run test`

Este comando crea una carpeta `__snapshots__` y una archivo con nuestro `snapshot`.

Ahora modifiquemos nuestro componente para ver como fallan nuestro test

```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Hide</button>
      </div>
    );
  }
}

export default App;
```

Volvemos a ejecutar el comando.

`npm run test`

Como podemos ver no falla nuestro test por que no coincide con nuestro `snapshot` previamente creado.

Si necesitamos actualizar nuestro `snapshot` debemos agregar un nuevo script a nuestro archivo `package.js`.

`"test:update": "jest --updateSnapshot"`

Ahora ejecutamos nuestro script agregado.

`npm run test:update`

## Interactuar con nuestros componentes

Hasta el momento no hemos agregado ningún estado o método a nuestro componente de aplicación, agreguemos el estado y los métodos a nuestro componente.

Modifiquemos el archivo `src/App.js`

```
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isActive: false
    }
  }

  handleClick() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {this.props.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
```

Usando jest vamos  a escribir un test que nos permita asegurarnos  de que el texto del button cambie cuando se interactúe.
También debemos agregar el metodo `update` de `react-test-renderer`

`import { create, update } from 'react-test-renderer'`

Agregamos nuestro test para asegurar el correcto comportamiento de nuestro componente.

```
describe("Changing our button name to Hide", () => {

    test('toggle the button', () => {
        let tree = create(<App />);

        let instance = tree.getInstance();

        expect(instance.state.isActive).toBe(false)

        // changing  the state
        instance.handleClick();

        // isActive property is updated to `true`
        expect(instance.state.isActive).toBe(true);

        expect(tree.toJSON()).toMatchSnapshot()
    })
})
```

## Cobertura

Jest puede recolectar información de la cobertura de código de nuestro proyecto, incluyendo  los archivos sin test.

Podemos generar un informe de cobertura sobre nuestros tests, agregando el siguiente script en nuestro archivo `package.js`.

`"test:coverage": "jest test --coverage"`

Ahora ejecutamos en la terminal  el siguiente script.

`npm run test:coverage`

En la terminal podremos ver el detalle, pero ademas se crea una carpeta `coverage` donde esta el informe en HTML.
