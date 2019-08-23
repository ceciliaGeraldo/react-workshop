## Animaciones 
**React** nos proporciona un componente complementario **ReactTransitionGroup**, es una API de bajo nivel para animación, y **ReactCSSTransitionGroupes** un componente para implementar fácilmente animaciones CSS básicas y transiciones cuando un componente React entra o sale del DOM.

## Instalación 
Para utilizar estos componentes es necesario instalar **react-addons-css-transition-group** al proyecto

`npm install react-addons-css-transition-group --save`

Importar ReactCSSTransitionGroup dentro del archivo src/App.js

`import ReactCSSTransitionGroup from 'react-addons-css-transition-group'`

## Animación Aparecer
Para agregar una transición  al momento que un componente es montado por primera vez, es necesario definir el valor **true** para el prop **transitionApper**

Agregamos lo siguiente como respuesta del método **render** en nuestro archivo src/App.js

```
<div className="App">
  <ReactCSSTransitionGroup 
    transitionName="foo" 
    transitionApper={true}
    transitionApperTimeout={5000}
    transitionEnter={false}
    transitionLeave={false}>
    <h1> Hello, World! </h1>
  </ReactCSSTransitionGroup> 
</div>
```
Usando la etiqueta **ReactCSSTransitionGroup**, se ha definido la porción en donde la animación tomará lugar.
Es necesario especificar **transitionName**, este nombre es usado como prefijo para las clases de CSS que serán ejecutadas en **Apper** y cuando estén en su estado Activo.

```
.foo-apper {
  opacity: .01;
}

.foo-apper.foo-apper-active {
  opacity: 1;
  transition: opacity 5s ease-in;
}
```
Como ven es necesario definir la duración de la animación en el componente y en los estilos. Es así como React sabe cuándo quitar la clase de la animación del elemento y cuando quitar el elemento del DOM.

## Animación Entrar/Salir
Para utilizar los las transiciones de entrada y salida se deben usar los props `transitionEnter` y `transitionLeave`, al igual que en la transición `Apper` es necesario definir el Timeout.

El siguiente ejemplo podremos observar como es la transición de entrada:

```
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: [],
      name: ''
    };
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleClick(e) {
    const newArray = this.state.data.slice();
    newArray.push({id: (new Date()).getTime(), name: this.state.name});
    this.setState({data: newArray, name: ''});
  }

  render() {
    const { name, data } = this.state;
    return (
      <div className="App">
        <h1>Lista de Invitados</h1>
        <label>Ingresa Nombre:</label>
        <input type="text" value={name} onChange={this.handleChange} />
        <input type="button" value="agregar" onClick={this.handleClick} />

        <ReactCSSTransitionGroup 
          transitionName="super"
          transitionAppear={false} 
          transitionEnterTimeout={3000}
          transitionEnter={true} 
          transitionLeave={false}>
        {
          this.state.data.map(function(guest) {
             return <li key={guest.id}>{guest.name}</li>
          })
        }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
```
No olvidar que es necesario definir las clases en los estilos para que react pueda animar nuestra lista:

```
.super-enter {
  opacity: .01;
}
 
.super-enter.anim-enter-active {
  opacity: 1;
  transition: opacity 3s ease-in;
}
```


## Actividad
 Usando el código anterior se requiere implementar la animación Leave (Salir), algunas consideraciones:

- usar `transitionLeave` para activar la animación.
- Agregar el CSS necesario para la animación de salida.
- agregar un botón en cada elemento la lista, que permita quitar el elemento  del listado.



