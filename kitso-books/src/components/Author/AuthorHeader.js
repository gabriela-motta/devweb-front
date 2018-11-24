import React from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
//import './AuthorHeader.scss'

const AuthorHeader = () => (
  <div className="AuthorHeader">
    <Image centered src='https://images.gr-assets.com/authors/1382592903p5/6540057.jpg' size='medium' />
    <Header as='h1' icon textAlign='center'>
      <Header.Content>Andy Weir</Header.Content>
    </Header>
    <p> Country: United States </p>

    <Button content='Follow' labelPosition='left' icon='plus' inverted secondary />
  </div>
)

export default AuthorHeader
