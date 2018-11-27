import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props);

    let location = "";
    if (props.location.pathname === "/") {
      location = "home";
    } else if (props.location.pathname === "/books") {
      location = "books";
    } else if (props.location.pathname === "/authors") {
      location = "authors";
    }

    this.state = {
      activeItem: location
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='books'
            active={activeItem === 'books'}
            onClick={this.handleItemClick}
            as={Link}
            to="/books"
          />
          <Menu.Item
            name='authors'
            active={activeItem === 'authors'}
            onClick={this.handleItemClick}
            as={Link}
            to="/authors"
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

export default withRouter(Navbar);
