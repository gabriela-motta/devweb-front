import React, { Component } from 'react';
import './App.scss';
import { Header, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as='h1' icon textAlign='center'>
          <Icon name='book' circular />
          <Header.Content>Kitso Books</Header.Content>
        </Header>
        <Button content='Sign Up' secondary as={Link} to="/signup" />
      </div>
    );
  }
}

export default App;
