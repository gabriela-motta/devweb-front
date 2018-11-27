import React, { Component } from 'react'
import { Form, Container, Message, Icon } from 'semantic-ui-react'
import API from '../../api.js'

class Signup extends Component {
  state = { username: '', email: '', password: '', signupSuccess: false }

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

    this.setState({ username: '', email: '', password: '', signupSuccess: true })
  }

  render(){
    const { username, email, password } = this.state
    if (this.state.signupSuccess){
      return (
        <Container>
          <Message
            success
            header='Your user registration was successful'
            content='You may now login with the username you have chosen'/>
        </Container>
      )
    } else {
      return(
        <Container>
          <Message
            attached
            header='Welcome to Kitso Books!'
            content='Fill out the form below to sign-up for a new account'
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
              type="email"
              autoComplete="email"
              label="Email"
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange} />
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
          <Message attached='bottom' warning>
            <Icon name='help' />
            Already signed up?&nbsp;<a href='/login'>Login here</a>&nbsp;instead.
          </Message>
        </Container>
      )
    }
  }
}

export default Signup
