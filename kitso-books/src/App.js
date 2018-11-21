import React, { Component } from 'react';
import Book from './components/Book';
import Author from './components/Author';
import Navbar from './components/Navbar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Author/>
      </div>
    );
  }
}

export default App;
