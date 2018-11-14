import React, { Component } from 'react';
import BookHeader from './BookHeader'
import Navbar from './Navbar'
import BookContainer from './BookContainer'
import { Image } from 'semantic-ui-react'

class Book extends Component {
  render() {
    return (
      <div className="Book">
      <Navbar/>
      <BookHeader/>
      <BookContainer/>
      </div>
    );
  }
}

export default Book;
