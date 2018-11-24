import React, { Component } from 'react';
import Book from './components/Book';
import Author from './components/Author';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Book/>
      </div>
    );
  }
}

export default App;
