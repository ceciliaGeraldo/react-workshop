import React, { Component } from 'react';
import axios from 'axios';

class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      country: 'cuba',
      data: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      name: e.target.value.toLowerCase()
    })
  }

  handleTextArea(e) {
    const value = e.target.value;
    if (value !== null) {
      this.setState({
        description: e.target.value
      })
    }
    
  }

  handleSelect(e) {
    this.setState({
      country: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/submit-form", this.state)
      .then((response) => {
        this.setState({data: response.data})
        console.info(response.data);
      })
  }

  render() {
    const { name, description, country, data } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>Componentes Controlados</h1>
          <label>
             Nombre :
            <input type="text" name="name" value={name} onChange={this.handleInput}/>
          </label>
          <label>
             Descripci&oacute;n: 
            <textarea name="description" value={description} onChange={this.handleTextArea} />
          </label>
          <label>
             Pa&iacute;s
            <select value={country} name="country" onChange={this.handleSelect}>
              <option value="argentina">Argentina</option>
              <option value="chile">Chile</option>
              <option value="colombia">Colombia</option>
              <option value="venezuela">Venezuela</option>
              <option value="cuba">Cuba</option>
            </select>
          </label>
          <input type="submit" value="Enviar"/>

          <p>{data ? `Hola ${data.name}!` : null}</p>
        </form>
    );
  }
}

export default ControlledComponent;