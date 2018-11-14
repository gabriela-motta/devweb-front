import React, { Component } from 'react';
import BookHeader from './BookHeader'
import Navbar from './Navbar'
import BookReviews from './BookReviews'
import { Image } from 'semantic-ui-react'

class Book extends Component {
  render() {
    return (
      <div className="Book">
      <Navbar/>
      <BookHeader/>
      <BookReviews/>
      </div>
    );
  }
}

export default Book;
