import React, { Component } from 'react';
import { Header, Image, Button } from 'semantic-ui-react'
import './BookHeader.scss'
import API from '../../api.js'

class BookHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: props.data,
      author: []
    };
  }

  componentDidMount() {
    API.get('api/author/' + this.state.data.author)
      .then(res => {
        const author = res.data;
        this.setState({ author, isLoaded: true });
      });
  }

  render() {
    return (
      <div className="BookHeader">
        <Image centered src={this.state.data.image} size='medium' />
        <Header as='h1' icon textAlign='center'>
          <Header.Content>{this.state.data.title}</Header.Content>
          <Header sub textAlign='center'>Written by: {this.state.author.name}</Header>
        </Header>
        <Button content='Book Read' labelPosition='left' icon='check' secondary />
      </div>
    );
  }
}

export default BookHeader
