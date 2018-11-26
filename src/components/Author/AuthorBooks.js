import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import './AuthorBooks.scss'

class AuthorBooks extends Component {
  render(){
    return(
      <div className="AuthorBooks">
        <Header as='h3' dividing>
          Books by this author
        </Header>
      </div>
    )
  }
}

export default AuthorBooks
