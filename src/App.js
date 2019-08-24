import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
  handleDelete(e){
    const array = this.state.data;
    let index = array.indexOf(e.target.value);
    if(index=!-1){
      array.splice(index,1);
      this.setState({data: array});
    }
  }

  render() {
    const { name, data } = this.state;
    return (
      <div className="App">
        <h1>Lista de Invitados</h1>
        <label>Ingresa Nombre:</label>
        <input type="text" value={name} onChange={this.handleChange} />
        <input type="button" value="agregar" onClick={this.handleClick} />
        <input type="button" value="quitar" onClick={this.handleDelete}/>

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



export default hot(module)(App);
