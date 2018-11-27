import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './BookCard.scss'

class BookCard extends Component {
  render() {
    return (
      <Card className="bookCard" href={this.props.link}>
        <Image centered src={this.props.image} size='medium' className="imageCard" />
        <Card.Content textAlign="left">
          <Card.Header>{this.props.title}</Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

export default BookCard;
