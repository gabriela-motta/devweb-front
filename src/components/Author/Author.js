import React, { Component } from 'react';
import AuthorHeader from './AuthorHeader'
import AuthorContainer from './AuthorContainer'
import { Container, Grid } from 'semantic-ui-react'
import './Author.scss'
import API from '../../api.js'
import PageLoader from '../Loader'

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      author: []
    };
  }

  componentDidMount() {
    API.get('api' + this.props.location.pathname)
      .then(res => {
        const author = res.data;
        this.setState({ author, isLoaded: true });
      });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="Author">
          <Container>
            <Grid stackable divided columns={2}>
              <Grid.Column width={4}>
                <AuthorHeader author={this.state.author}/>
              </Grid.Column>
              <Grid.Column width={12}>
                <AuthorContainer author={this.state.author}/>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      );
    }else {
      return <PageLoader/>
    }

  }
}

export default Author;
