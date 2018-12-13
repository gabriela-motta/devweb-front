import React, { Component } from 'react'
import { Form, Container, Message, Icon } from 'semantic-ui-react'
import SuccessBanner from '../SuccessBanner'
import axios from 'axios'

class Login extends Component {
  state = { username: '', password: '', signupSuccess: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post('https://kitso-books.herokuapp.com/api/auth', user)
      .then(res => {
        if (res.status === 200) {
          this.setState({ signupSuccess: true })
        }
      })

    this.setState({ username: '', password: '' })
  }

  render(){
    const { username, password } = this.state
    if (this.state.signupSuccess){
      return (
        <SuccessBanner actionType="login" nextAction="find the best books!" />
      )
    } else {
      return(
        <Container>
          <Message
            attached
            header='Login to Kitso Books!'
          />
          <Form className='attached fluid segment' onSubmit={this.handleSubmit}>
            <Form.Input
              type="text"
              autoComplete="username"
              label="Username"
              placeholder='Username'
              name='username'
              value={username}
              onChange={this.handleChange} />
            <Form.Input
              type="password"
              autoComplete="new-password"
              label="Password"
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange} />
            <Form.Button content='Login' />
          </Form>
          <Message attached='bottom' warning>
            <Icon name='help' />
            Not a member?&nbsp;<a href='/signup'>Sign Up here</a>&nbsp;instead.
          </Message>
        </Container>
      )
    }
  }
}

export default Login
