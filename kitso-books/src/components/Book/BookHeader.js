import React from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
import './BookHeader.scss'

const BookHeader = () => (
  <div className="BookHeader">
    <Image centered src='https://static1.squarespace.com/static/596508de72af6598628b111b/598316a259cc688aecff678f/5983173df9a61eb15deeb104/1501763389624/14+martian.jpg?format=500w' size='medium' />
    <Header as='h1' icon textAlign='center'>
      <Header.Content>The Martian</Header.Content>
      <Header sub textAlign='center'>Written by: Andy Weir</Header>
    </Header>

    <Button content='Book Read' labelPosition='left' icon='check' secondary />
  </div>
)

export default BookHeader
