import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import BookSynopsis from './BookSynopsis'
import BookReviews from './BookReviews'
import './BookContainer.scss'

class BookContainer extends Component {
  render(){
    return (
      <Container className="BookContainer" textAlign='justified'>
        <BookSynopsis data={this.props.data}/>
        <BookReviews/>
      </Container>
    )
  }
}

export default BookContainer
