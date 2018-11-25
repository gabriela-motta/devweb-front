import React, { Component } from 'react';
import BookHeader from './BookHeader'
import BookContainer from './BookContainer'
import { Container, Grid } from 'semantic-ui-react'
import './Book.scss'

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.location.state.data
    };
  }

  render() {
    return (
      <div className="Book">
        <Container>
          <Grid stackable divided columns={2}>
            <Grid.Column width={4}>
              <BookHeader data={this.state.data}/>
            </Grid.Column>
            <Grid.Column width={12}>
              <BookContainer data={this.state.data}/>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Book;
