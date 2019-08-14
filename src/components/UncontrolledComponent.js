import React, { Component } from 'react';

class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  
    console.info('Valor del input:', this.input.current.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <h1>Componente NO Controlado</h1>
          <label>
             email
            <input type="text" name="email" ref={this.input} defaultValue={""} className="inputEmail"  />
          </label>
          <input type="submit" value="Enviar"/>
        </form>
    );
  }
}

export default UncontrolledComponent;