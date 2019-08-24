## React Router

Es la librería estándar de rutas para React ... en otras palabras "React Router mantiene nuestra UI sincronizada con nuestra URL".

## Instalación 

`npm install react-router-dom --save`

## Crear Vistas
Vamos a crear un par de vistas para nuestra aplicación, por simpleza  vamos a crear los componentes dentros `src/index.js`

Creamos el componente principal al cual llamaremos `Navigation`.
```
const Navigation = () =>{
  return (
    <section>
      <App />
      <ul>
        <li>{'vista A'}</li>
        <li>{'vista B'}</li>
      </ul>
    </section>
  );
};
```

En el componente `Navigation`, tenemos el título de nuestra app y un menú de navegación con las opciones a nuestras vistas.

Ahora creamos el resto de nuestras vistas.

```
const VistaA = () => {
  return (
    <section>
      <h2>{'Nuestra Vista A'}</h2>
    </section>
  );
};

const VistaB = () => {
  return (
    <section>
      <h2>{'Nuestra Vista B'}</h2>
    </section>
  );
};
```
## Conectar Vistas con React Router

Importa la librerías requeridas para `react-router` en `src/index.js`.

`import {Link, Route, BrowserRouter as Router} from 'react-router-dom';`

En lugar de especificar el componente a mostrar, vamos a definir distintas rutas

```
const AppRouter = () => {
  return (
    <Router>
      <Route component={Navigation} path="/" />
      <Route component={VistaA} path="/vista-a" />
      <Route component={VistaB} path="/vista-b" />
    </Router>
  );
};

```

Además es necesario cambiar el render quedando de esta forma.

```
ReactDOM.render(<AppRouter />, document.getElementById('root'));
```

Si bien ya tenemos definido nuestras rutas, no podemos navegar. Vamos a modificar el componente `Navigation`

```
const Navigation = () =>{
  return (
    <section>
      <App />
      <ul>
        <li>
          <Link to="/vista-a">{'vista A'}</Link>
        </li>
        <li>
          <Link to="/vista-b">{'vista B'}</Link>
        </li>
      </ul>
    </section>
  );
};
```
Con este cambio ya es posible navegar entre diferentes vistas.

## Parametros por URL

Es posible pasar parámetros por URL  definiendo las ruta de esta manera
```
const AppRouter = () => {
  return (
    <Router>
      <Route component={Navigation} path="/" />
      <Route component={Vista} path="/vista/:id" />
    </Router>
  );
};
```

Cambiamos nuestros link de navegación para que envíen el nombre de la vista.

```
const Navigation = () =>{
  return (
    <section>
      <App />
      <ul>
        <li>
          <Link to="/vista/a">{'vista A'}</Link>
        </li>
        <li>
          <Link to="/vista/b">{'vista B'}</Link>
        </li>
        
      </ul>
    </section>
  );
};
```

Ajustamos nuestro componente vista para que pinte el nombre dependiendo del parámetro que le enviemos.

const Vista = ({ match}) => {
  return (
    <section>
      <h2>{`Nuestra Vista ${match.params.id}`}</h2>
    </section>
  );
};

