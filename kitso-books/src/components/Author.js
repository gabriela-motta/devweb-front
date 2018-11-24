import React, { Component } from 'react';
import AuthorHeader from './AuthorHeader'
import AuthorContainer from './AuthorContainer'
import { Container, Grid } from 'semantic-ui-react'
import './Author.scss'

class Author extends Component {
  render() {
    return (
      <div className="Author">
        <Container>
          <Grid stackable divided columns={2}>
            <Grid.Column width={4}>
              <AuthorHeader/>
            </Grid.Column>
            <Grid.Column width={12}>
              <AuthorContainer/>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Author;
