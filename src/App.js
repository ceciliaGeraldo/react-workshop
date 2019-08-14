import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import TodayList from './components/TodayList';
import TomorrowList from './components/TomorrowList';
import ErrorBoundary from './components/ErrorBoundary';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.buttonRefCallback = (elem) => { this.buttonRef = elem; };
    this.rollToButton = this.rollToButton.bind(this);
  }

  rollToButton() {
    if (this.buttonRef) {
      this.buttonRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  render() {
    return (
      <div className="App" id="app">
        <ErrorBoundary>
          <TodayList title="Lista de hoy" />
        </ErrorBoundary>
        <ErrorBoundary>
          <TomorrowList title="Lista de mañana" />
        </ErrorBoundary>
        <Button
          text="Roll to top!!!"
          buttonRef={this.buttonRefCallback}
          onClick={this.rollToButton}
        />
      </div>
    );
  }
}

export default hot(module)(App);
