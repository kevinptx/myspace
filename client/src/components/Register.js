import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    first_name: "",
    last_name: "",
    image: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email,
      password,
      passwordConfirmation,
      first_name,
      last_name,
      image
    } = this.state;
    const {
      auth: { handleRegister },
      history
    } = this.props;
    if (password.length < 8)
      alert("Password must be greater than 7 characters!");
    else if (password === passwordConfirmation)
      handleRegister(
        { email, password, passwordConfirmation, first_name, last_name, image },
        history
      );
    else alert("Passwords Do Not Match!");
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      first_name,
      last_name,
      image
    } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign="center">
          Register
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="First Name"
              required
              autoFocus
              name="first_name"
              value={first_name}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Last Name"
              required
              name="last_name"
              value={last_name}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Input
            label="Profile Photo"
            required
            name="image"
            value={image}
            placeholder="Direct URL to Profile Photo"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            required
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Password Confirmation"
            type="password"
            onChange={this.handleChange}
          />
          <Segment textAlign="center" basic>
            <Button primary type="submit">
              Submit
            </Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
