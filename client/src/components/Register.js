import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";

class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "" };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const {
      auth: { handleRegister },
      history
    } = this.props;
    if (password === passwordConfirmation && password.length > 6)
      handleRegister({ email, password, passwordConfirmation }, history);
    else
      alert(
        password === passwordConfirmation
          ? "Passwords Do Not Match!"
          : "Password must be greater than 6 characters!"
      );
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign="center">
          Register
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            required
            autoFocus
            name="email"
            value={email}
            placeHolder="Email"
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