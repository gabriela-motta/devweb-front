import React, { Component } from 'react'
import BooksPage from '../Book/BooksPage'
import './AuthorBooks.scss'

class AuthorBooks extends Component {
  render(){
    return(
      <div className="AuthorBooks">
        <BooksPage author={this.props.author}/>
      </div>
    )
  }
}

export default AuthorBooks
