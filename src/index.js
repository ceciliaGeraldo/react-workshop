import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';

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

  const Vista = ({match}) => {
    return (
      <section>
        <h2>{`Nuestra Vista ${match.params.id}`}</h2>
      </section>
    );
  };
  

  const AppRouter = () => {
    return (
      <Router>
        <Route component={Navigation} path="/" />
        <Route component={Vista} path="/vista/:id" />        
      </Router>
    );
  };

ReactDOM.render(<AppRouter />, document.getElementById('root'));
