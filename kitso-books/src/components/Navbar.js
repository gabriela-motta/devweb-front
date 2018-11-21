import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='books'
            active={activeItem === 'books'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name='Kitso Books' position="right" active={activeItem === 'Kitso Books'}>
            <Icon name='book'/>
            Kitso Books
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}
