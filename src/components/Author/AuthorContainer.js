import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import AuthorDescription from './AuthorDescription'
import AuthorBooks from './AuthorBooks'
//import './AuthorContainer.scss'

class AuthorContainer extends Component {
  render(){
    return(
      <Container className="AuthorContainer" textAlign='justified'>
        <AuthorDescription description={this.props.author.description}/>
        <AuthorBooks/>
      </Container>
    )
  }
}

export default AuthorContainer
