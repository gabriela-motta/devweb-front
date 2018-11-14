import React from 'react'
import { Container } from 'semantic-ui-react'
import BookSynopsis from './BookSynopsis'
import BookReviews from './BookReviews'

const BookContainer = () => (
  <Container textAlign='justified'>
    <BookSynopsis/>
    <BookReviews/>
  </Container>
)

export default BookContainer
