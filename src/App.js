import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav'
import Header from './component/Header'
import Sobre from './component/Sobre'
import Contato from './component/Contato'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Sobre/>
        <Contato/>
      </div>
    );
  }
}

export default App;
