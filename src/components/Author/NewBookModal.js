import React, { Component } from 'react'
import axios from 'axios';
import { Modal, Button, Form, TextArea, Loader, Transition, Icon, Container, Header } from 'semantic-ui-react';
import './NewBookModal.scss'

export default class NewBookModal extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, submited: false, isLoading: false, bookCreated: false, title: '', sinopsis: '', image: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreatedTransition = this.handleCreatedTransition.bind(this);
  }

  show = () => this.setState({ open: true, submited: false });
  close = () => this.setState({ open: false });

  resetForm() {
    this.setState({ title: '', sinopsis: '', image: ''});
  }

  handleInputChange(event, data) {
    let value = data.value;
    let name = data.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submited: true, isLoading: true});

    let book = {
      title: this.state.title.trim(),
      sinopsis: this.state.sinopsis.trim(),
      image: this.state.image,
      author: this.props.authorId
    };

    axios.post('https://kitso-books.herokuapp.com/api/book', book)
      .then(response => {
        if (response.status === 200) {
          const { onChange } = this.props;
          onChange(response.data.book);
          this.setState({isLoading: false, bookCreated: true})
        }
      }).catch(error => {
        this.setState({isLoading: false, bookCreated: false })
        console.error('new book error: ', error);
      }).finally(() => this.resetForm());
  }

  handleCreatedTransition() {
    setTimeout(() => {
      this.close();
    }, 1500)
  }

  render() {
    let { open } = this.state;
    let loader = <div></div>;

    if (this.state.isLoading) {
      loader = (
        <Container textAlign="center">
          <Header as="h2" className="loader-text">
            <Loader active={this.state.isLoading} size="big"/>
            Creating Book...
          </Header>
        </Container>
      );
    }

    return (
      <div>
        <Button inverted secondary icon labelPosition='left' onClick={this.show}>
          Create New Book
          <Icon name="plus"/>
        </Button>

        <Modal className="NewBookModal" dimmer="inverted" size='small' open={open} onClose={this.close}>
          <Modal.Header>New Book</Modal.Header>
          {(this.state.submited) ?
          <Modal.Content className="submited">
            {loader}
            <Transition visible={(!this.state.isLoading && this.state.bookCreated)} animation='scale' duration={500} onStart={this.handleCreatedTransition}>
              <Container textAlign="center">
                <Header as="h2">
                  <Icon name='thumbs up outline' />
                  Book Created!
                </Header>
              </Container>
            </Transition>

            <Transition visible={!(this.state.isLoading || this.state.bookCreated)} animation='scale' duration={500} onStart={this.handleCreatedTransition}>
              <Container textAlign="center">
                <Header as="h2">
                  <Icon name='thumbs down outline' />
                  An error ocurred, sorry =(
                </Header>
              </Container>
            </Transition>
          </Modal.Content>
          :
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input required label='Title'  placeholder='Book title' value={this.state.title}
                          name='title' onChange={this.handleInputChange} />

              <Form.Field required control={TextArea} label='Synopsis' placeholder="Write the Book's synopsis"
                          value={this.state.sinopsis} name='sinopsis' onChange={this.handleInputChange}/>

              <Form.Input required label='Image' placeholder='Image link' value={this.state.image} name='image' onChange={this.handleInputChange}  />

              <Modal.Actions>
                <Button className='saveNewBook' inverted secondary type='submit' floated='right'
                        icon='checkmark' labelPosition='left' content='Create' />
                <Button floated='right' onClick={this.close}>Cancel</Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>}
        </Modal>
      </div>
    )
  }
}
