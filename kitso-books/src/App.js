import React, { Component } from 'react';
import Book from './components/Book';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Book name="david"></Book>
        </header>
      </div>
    );
  }
}

export default App;
