import React, { Component } from 'react';
import BookHeader from './BookHeader'
import BookContainer from './BookContainer'
import { Container, Grid } from 'semantic-ui-react'
import './Book.scss'

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <Container>
          <Grid stackable divided columns={2}>
            <Grid.Column width={4}>
              <BookHeader/>
            </Grid.Column>
            <Grid.Column width={12}>
              <BookContainer/>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Book;
