import React, { Component } from 'react';
import './App.scss';
import { Header, Icon } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as='h1' icon textAlign='center'>
          <Icon name='book' circular />
          <Header.Content>Kitso Books</Header.Content>
        </Header>
      </div>
    );
  }
}

export default App;
