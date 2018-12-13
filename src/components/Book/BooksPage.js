import React, { Component } from 'react';
import { Header, Card, Container } from 'semantic-ui-react'
import PageLoader from '../Loader'
import BookCard from './BookCard'
import axios from 'axios'

class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: []
    };
  }

  componentDidMount() {
    axios.get('https://kitso-books.herokuapp.com/api/book')
      .then(res => {
        const books = res.data;
        this.setState({ books, isLoaded: true });
      });
      axios.get('https://kitso-books.herokuapp.com/api/auth/')
          .then(res => {
            console.log(res.data)
          });
  }

  render() {
    if (this.state.isLoaded){
      return (
        <Container>
          <Header as='h2' dividing>
            Books
          </Header>
          <Card.Group stackable itemsPerRow={this.state.books.length < 4 ? (this.state.books.length) : (4)}>
              {this.state.books.map(book => (
                <BookCard key={book._id}
                      image={book.image}
                      title={book.title}
                      link={"/book/" + book._id} />
              ))}
          </Card.Group>
        </Container>
      );
    } else {
      return <PageLoader/>
    }
  }
}

export default BooksPage;
