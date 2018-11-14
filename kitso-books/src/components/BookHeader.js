import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const BookHeader = () => (
  <div>
    <Header as='h1' icon textAlign='center'>
      <Icon name='book' circular />
      <Header.Content>Book</Header.Content>
    </Header>
    <Header sub textAlign='center'>Written by: Author</Header>
  </div>
)

export default BookHeader
