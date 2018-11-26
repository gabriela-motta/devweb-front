import React, { Component } from 'react';
import { Header, Image, Button } from 'semantic-ui-react'
import './BookHeader.scss'
import API from '../../api.js'

class BookHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      author: []
    };
  }

  async componentDidMount() {
    await API.get('api/author/' + this.props.author)
      .then(res => {
        const author = res.data;
        this.setState({ author, isLoaded: true });
      });
  }

  render() {
    return (
      <div className="BookHeader">
        <Image centered src={this.props.book.image} size='medium' />
        <Header as='h1' icon textAlign='center'>
          <Header.Content>{this.props.book.title}</Header.Content>
          <Header sub textAlign='center'>Written by: {this.state.author.name}</Header>
        </Header>
        <Button content='Book Read' labelPosition='left' icon='check' secondary />
      </div>
    );
  }
}

export default BookHeader
