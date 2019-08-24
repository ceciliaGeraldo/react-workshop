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
          {this.state.isActive ? "Show" : "Hide"}
        </button>
      </div>
    );
  }
}

export default App;