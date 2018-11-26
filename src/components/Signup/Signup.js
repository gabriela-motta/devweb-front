import React, { Component } from 'react'
import { Form, Container } from 'semantic-ui-react'
import API from '../../api.js'

class Signup extends Component {
  state = { username: '', email: '', password: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    API.post('api/user', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    this.setState({ username: '', email: '', password: '' })
  }

  render(){
    const { username, email, password } = this.state
    return(
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            type="text"
            autoComplete="username"
            label="Username"
            placeholder='Username'
            name='username'
            value={username}
            onChange={this.handleChange} />
          <Form.Input
              type="email"
              autoComplete="email"
              label="Email"
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
          />
          <Form.Input
            type="password"
            autoComplete="new-password"
            label="Password"
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.handleChange} />
          <Form.Button content='Sign Up' />
        </Form>
      </Container>
    )
  }
}

export default Signup
