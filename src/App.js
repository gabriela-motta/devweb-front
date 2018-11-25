import React, { Component } from 'react';
import './App.scss';
import { Header, Icon } from 'semantic-ui-react'
import API from './api.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: []
    };
  }

  componentDidMount() {
    API.get('api/book')
      .then(res => {
        const books = res.data;
        this.setState({ books, isLoaded: true });
      });
  }

  render() {
    return (
      <div className="App">
        <Header as='h1' icon textAlign='center'>
          <Icon name='book' circular />
          <Header.Content>Kitso Books</Header.Content>
        </Header>
        <ul>
          { this.state.books.map(book => <li>{book.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
