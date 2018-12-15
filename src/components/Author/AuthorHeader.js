import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'
//import './AuthorHeader.scss'

class AuthorHeader extends Component {
  render(){
    return(
      <div className="AuthorHeader">
        <Image centered src={this.props.author.image} size='medium' />
        <Header as='h1' icon textAlign='center'>
          <Header.Content>{this.props.author.name}</Header.Content>
        </Header>
        <p> Country: {this.props.author.country} </p>
      </div>
    );
  }
}

export default AuthorHeader
