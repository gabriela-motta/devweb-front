import React, { Component } from 'react';
import { Header} from 'semantic-ui-react'

class BookSynopsis extends Component {
  render(){
    return (
      <div>
        <Header as='h2' dividing>
          Synopsis
        </Header>
        <p>{this.props.data.sinopsis}</p>
      </div>
    );
  }
}

export default BookSynopsis
