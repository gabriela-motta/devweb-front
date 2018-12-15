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
      books: [],
      title: ""
    };
  }

  getAllBooks() {
    axios.get('https://kitso-books.herokuapp.com/api/book')
      .then(res => {
        const books = res.data;
        this.setState({ books, isLoaded: true, title: "Books" });
    });
  }

  componentDidMount() {
    if (this.props.books) {
      this.setState({ books: this.props.books, isLoaded: true });
    } else {
      this.getAllBooks();
    }
  }

  render() {
    if (this.state.isLoaded){
      return (
        <Container className="BooksPage">
          <Header as='h2' dividing>
            {this.state.title}
          </Header>
          <Card.Group className="CardGroup" stackable itemsPerRow={this.state.books.length < 4 ? (this.state.books.length) : (4)}>
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
