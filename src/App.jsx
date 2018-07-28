import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ControlTab from './components/ControlTab';
import Board from './components/Board';

import style from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shit: 'hi',
    };
  }

  render() {
    const { shit } = this.state;
    return (
      <div>
        <ControlTab title={shit} />
        <Board />
      </div>
    )
  }
}

export default hot(module)(App);
