import React, { Component } from 'react';
import { Header, Card, Container } from 'semantic-ui-react'
import API from '../../api.js'
import PageLoader from '../Loader'
import BookCard from '../BookCard'

class BooksPage extends Component {
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
