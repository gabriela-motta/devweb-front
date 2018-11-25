import React, { Component } from 'react';
import { Header} from 'semantic-ui-react'

class BookSynopsis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render(){
    return (
      <div>
        <Header as='h2' dividing>
          Synopsis
        </Header>
        <p>{this.state.data.sinopsis}</p>
      </div>
    );
  }
}

export default BookSynopsis
