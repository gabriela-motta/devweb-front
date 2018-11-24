import React from 'react'
import { Container } from 'semantic-ui-react'
import AuthorDescription from './AuthorDescription'
//import './AuthorContainer.scss'

const AuthorContainer = () => (
  <Container className="AuthorContainer" textAlign='justified'>
    <AuthorDescription/>
  </Container>
)

export default AuthorContainer
