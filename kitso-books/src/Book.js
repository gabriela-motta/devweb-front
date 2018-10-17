import React, { Component } from 'react';
import book from './book.svg';

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <p>
          Book Info
        </p>
        <img src={book} className="Book-logo" alt="logo" />
      </div>
    );
  }
}

export default Book;
