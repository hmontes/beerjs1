import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Bienvenidos al Encuentro Octubre 2017 de Beer.js</h2>
        <br />
        <Button.Group>
        <Button orange>Hola</Button>
        <Button>Mundo</Button>
        </Button.Group>
      </div>
    );
  }
}

export default App;
