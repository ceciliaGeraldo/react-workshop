import React, { Component } from 'react';
import axios from 'axios';

class ControlledComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
          <h1>Componentes Controlados</h1>
          <label>
             Nombre :
            <input type="text" name="name"/>
          </label>
          <label>
             Descripci&oacute;n: 
            <textarea name="description" />
          </label>
          <label>
             Pa&iacute;s
            <select  name="country">
              <option value="argentina">Argentina</option>
              <option selected value="chile">Chile</option>
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