import React, { Component } from 'react';
import Book from './components/Book';
import Navbar from './components/Navbar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Book/>
      </div>
    );
  }
}

export default App;
