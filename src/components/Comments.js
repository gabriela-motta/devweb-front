import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import avatar from '../img/avatar.png'

const Comments = () => (
  <Comment.Group>
  <Comment>
    <Comment.Avatar src={avatar}/>
    <Comment.Content>
      <Comment.Author as='a'>Matt</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>How artistic!</Comment.Text>
      <Comment.Actions>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
        <Icon name='star outline' size='small'/>
      </Comment.Actions>
    </Comment.Content>
  </Comment>

  <Comment>
    <Comment.Avatar src={avatar} />
    <Comment.Content>
      <Comment.Author as='a'>Elliot Fu</Comment.Author>
      <Comment.Metadata>
        <div>Yesterday at 12:30AM</div>
      </Comment.Metadata>
      <Comment.Text>
        <p>My favorite book =*</p>
      </Comment.Text>
      <Comment.Actions>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
      </Comment.Actions>
    </Comment.Content>
  </Comment>

  <Comment>
    <Comment.Avatar src={avatar} />
    <Comment.Content>
      <Comment.Author as='a'>Joe Henderson</Comment.Author>
      <Comment.Metadata>
        <div>5 days ago</div>
      </Comment.Metadata>
      <Comment.Text>Terrible writing</Comment.Text>
      <Comment.Actions>
        <Icon name='star' size='small'/>
        <Icon name='star' size='small'/>
        <Icon name='star outline' size='small'/>
        <Icon name='star outline' size='small'/>
        <Icon name='star outline' size='small'/>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
  </Comment.Group>

)

export default Comments
