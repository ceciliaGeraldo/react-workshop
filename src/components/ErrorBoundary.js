import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }
  
  componentDidCatch(error, info) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      info: info,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.info) {
      // Error path
      return (
        <div className="error">
          <h2 className="error__title">Algo se rompio, ¿Que será?</h2>
          <details className="error__details">
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>{this.state.info.componentStack}</p>
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
};

export default ErrorBoundary;
