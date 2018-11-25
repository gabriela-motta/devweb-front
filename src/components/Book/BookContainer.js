import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import BookSynopsis from './BookSynopsis'
import BookReviews from './BookReviews'
import './BookContainer.scss'

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render(){
    return (
      <Container className="BookContainer" textAlign='justified'>
        <BookSynopsis data={this.state.data}/>
        <BookReviews/>
      </Container>
    )
  }
}

export default BookContainer
