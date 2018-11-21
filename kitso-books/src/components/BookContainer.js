import React from 'react'
import { Container } from 'semantic-ui-react'
import BookSynopsis from './BookSynopsis'
import BookReviews from './BookReviews'
import './BookContainer.scss'

const BookContainer = () => (
  <Container className="BookContainer" textAlign='justified'>
    <BookSynopsis/>
    <BookReviews/>
  </Container>
)

export default BookContainer
