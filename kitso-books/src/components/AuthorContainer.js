import React from 'react'
import { Container } from 'semantic-ui-react'
import AuthorDescription from './AuthorDescription'
import Comments from './Comments'
//import './AuthorContainer.scss'

const AuthorContainer = () => (
  <Container className="AuthorContainer" textAlign='justified'>
    <AuthorDescription/>
    <Comments/>
  </Container>
)

export default AuthorContainer
