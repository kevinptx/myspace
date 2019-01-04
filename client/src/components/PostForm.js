import React from "react";
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";
import { Form, Icon } from "semantic-ui-react";

class PostForm extends React.Component {
  initialState = {
    title: "",
    body: "",
    first_name: "",
    last_name: ""
  };

  state = { ...this.initialState };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { user } = this.props.auth;
    e.preventDefault();
    this.setState({ first_name: user.first_name });
    this.setState({ last_name: user.last_name });

    axios
      .post(`/api/users/${user.id}/posts`)
      .then(res => this.props.history.push(`/profile`));
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        {" "}
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="title"
            placeholder="Post Title"
            required
            autofocus
            value={title}
            onChange={this.handleChange}
          />
          <Form.Input
            name="body"
            placeholder="Post Body"
            required
            autofocus
            value={body}
            onChange={this.handleChange}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default class ConnectedPostForm extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <PostForm {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
