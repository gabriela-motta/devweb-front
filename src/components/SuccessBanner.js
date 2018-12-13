import React, { Component } from 'react'
import { Container, Message } from 'semantic-ui-react'

class SuccessBanner extends Component {
  render() {
    return(
      <Container>
        <Message
          success
          header={'Your ' + this.props.actionType + ' was successful'}
          content={'You may now ' + this.props.nextAction} />
      </Container>
    )
  }
}

export default SuccessBanner
