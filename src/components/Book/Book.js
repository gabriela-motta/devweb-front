import React, { Component } from 'react';
import BookHeader from './BookHeader'
import BookContainer from './BookContainer'
import { Container, Grid } from 'semantic-ui-react'
import './Book.scss'
import axios from 'axios'
import PageLoader from '../Loader'

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      book: []
    };
  }

  componentDidMount() {
    axios.get('https://kitso-books.herokuapp.com/api/book/' + this.props.match.params.bookId)
      .then(res => {
        const book = res.data;
        this.setState({ book, isLoaded: true });
      });
  }

  render() {
    if (this.state.isLoaded){
      return (
        <div className="Book">
          <Container>
            <Grid stackable divided columns={2}>
              <Grid.Column width={4}>
                <BookHeader book={this.state.book} author={this.state.book.author}/>
              </Grid.Column>
              <Grid.Column width={12}>
                <BookContainer data={this.state.book}/>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      );
    }else {
      return <PageLoader/>
    }

  }
}

export default Book;
