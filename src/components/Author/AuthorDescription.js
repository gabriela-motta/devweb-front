import React, { Component } from 'react'
import { Header} from 'semantic-ui-react'

class AuthorDescription extends Component {
  render(){
    return(
      <div>
        <Header as='h2' dividing>
          Description
        </Header>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default AuthorDescription
