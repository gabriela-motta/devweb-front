import React, { Component } from 'react';
import { Header, Card, Container, List, Image } from 'semantic-ui-react'
import API from '../../api.js'
import { Link } from 'react-router-dom'
import PageLoader from '../Loader'
import BookCard from '../BookCard'

class AuthorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      authors: []
    };
  }

  componentDidMount() {
    API.get('api/author')
      .then(res => {
        const authors = res.data;
        this.setState({ authors, isLoaded: true });
      });
  }

  render() {
    console.log(this.state.isLoaded)
    if (this.state.isLoaded){
      return (
        <Container>
          <Header as='h2' dividing>
            Authors
          </Header>
          <List divided vertical size="huge">
            {this.state.authors.map(author =>
              <List.Item>
                <Image avatar src={author.image} />
                <List.Content verticalAlign='middle'>
                  <List.Header as={Link} to={"/author/" + author._id}>{author.name}</List.Header>
                </List.Content>
              </List.Item>
            )}
          </List>
        </Container>
      );
    } else {
      return <PageLoader/>
    }
  }
}

export default AuthorsPage;
