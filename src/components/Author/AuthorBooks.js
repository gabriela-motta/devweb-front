import React, { Component } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import BooksPage from '../Book/BooksPage'
import './AuthorBooks.scss'
import NewBookModal from './NewBookModal'
import PageLoader from '../Loader'
import axios from 'axios'

class AuthorBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: []
    };
  }

  handleNewBook = createdBook => {
    this.setState({ isLoaded: false })
    console.log(createdBook)
    this.setState(state => ({
      books: state.books.concat(createdBook),
      isLoaded: true
    }));
  };

  componentDidMount() {
    axios.get('https://kitso-books.herokuapp.com/api/book/author/' + this.props.author)
      .then(res => {
        const books = res.data;
        this.setState({ books, isLoaded: true });
    });
  }

  render(){
    let booksContent;
    console.log(this.state.books)

    if (this.state.isLoaded) {
      if (this.state.books.length > 0) {
        booksContent = (
          <Grid.Row>
            <BooksPage books={this.state.books}/>
          </Grid.Row>
        );
      } else {
        booksContent = (
          <div>
            <Grid.Row>
              <Header size='tiny'>
                <Icon name='times circle outline' />
                <Header.Content>
                  This author has no books.
                </Header.Content>
              </Header>
            </Grid.Row> </div>
        );
      }
    } else {
      booksContent = (
        <PageLoader/>
      );
    }

    return (
      <Grid className="AuthorBooks">
        <Grid.Column width={12}>
          <Header as='h1' >
            <Header.Content > Books by this author
            </Header.Content>
          </Header>
        </Grid.Column>

        <Grid.Column width={4}>
          <NewBookModal onChange={this.handleNewBook} authorId={this.props.author} />
        </Grid.Column>
        { booksContent }
      </Grid>
    );

  }
}

export default AuthorBooks
