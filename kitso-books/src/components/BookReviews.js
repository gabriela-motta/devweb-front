import React from 'react'
import { Button, Comment, Form, Header, Icon } from 'semantic-ui-react'
import avatar from '../img/avatar.png'
import RatingStars from './Rating'
import Comments from './Comments'

const BookReviews = () => (
  <Comment.Group>
    <Header as='h3' dividing>
      Reviews
    </Header>

    <Comments/>

    <Form reply>
      <Form.TextArea />
      <Button content='Add your review' labelPosition='left' icon='edit' inverted secondary />
      <RatingStars/>
    </Form>
  </Comment.Group>
)

export default BookReviews
