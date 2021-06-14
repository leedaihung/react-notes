import React from 'react'
import { Button } from '@material-ui/core'
import 'fontsource-roboto'
import Icon from '@material-ui/core/Icon'
import 'material-design-icons/iconfont/material-icons.css'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <Button variant="contained" color="primary">
          <Icon>face</Icon>
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
