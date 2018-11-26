import React, { Component } from 'react';
import './App.scss';
import { Header, Icon, List } from 'semantic-ui-react'
import API from './api.js'
import { Link } from 'react-router-dom'

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
        <List>
          { this.state.books.map(book =>
            <List.Item
              key={book._id}
              content={book.title}
              as={Link}
              to={"/book/" + book._id} />) }
        </List>
      </div>
    );
  }
}

export default App;
