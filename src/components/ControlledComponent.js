import React, { Component } from 'react';
import axios from 'axios';

class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pablo',
      description: 'Lorem impsum',
      country: 'chile',
      message: '',
      data: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleSubmit(event) {

    axios.post('http://localhost:8080/submit-form', this.state)
      .then(response => {
        console.info(response);
        console.info(response.data);
        if (response.status === 200) {
          this.setState({message: 'creado correcta', data: response.data })
        }
      });

      
      
    event.preventDefault();
  }

  handleChangeInput(event) {
    this.setState({name: event.target.value})
  }

  handleChangeTextArea(event) {
    this.setState({description: event.target.value})
  }

  handleChangeSelect(event) {
    console.info(event.target.value);

    this.setState({country: event.target.value})
  }

  render() {
    const {name, description, country, message, data} = this.state;
    return (
      <form onSubmit={this.handleSubmit} >
          <h1>Componentes Controlados</h1>
          <h3>{message} : { data? data.name : null}</h3>
          <label>
             Nombre : {name}
            <input type="text" name="name" value={name} onChange={this.handleChangeInput}/>
          </label>
          <label>
             Descripci&oacute;n:  {description}
            <textarea value={description} name="description" onChange={this.handleChangeTextArea} />
          </label>
          <label>
             Pa&iacute;s
            <select value={country} name="country" onChange={this.handleChangeSelect}>
              <option value="argentina">Argentina</option>
              <option value="chile">Chile</option>
              <option value="colombia">Colombia</option>
              <option value="venezuela">Venezuela</option>
            </select>
          </label>
          <input type="submit" value="Enviar"/>
        </form>
    );
  }
}

export default ControlledComponent;