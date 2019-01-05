import React from "react";
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";
import { Form, Icon } from "semantic-ui-react";

class PostForm extends React.Component {
  //when you have many params you can use initialState to define them initially. You can call it anything, not necessarily initialState.
  state = {
    body: "",
    first_name: "",
    last_name: ""
  };

  //easier to spread the initialState and set it equal to state.

  //every post should pull the user first name and last name. In the feed, each individual user object is not being pulled in.
  componentDidMount() {
    this.setState({ first_name: user.first_name });
    this.setState({ last_name: user.last_name });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    //the user id is coming from the auth props.
    const posts = this.state;

    //auth was created in AuthProvider and this component is subscribing to AuthProvider. We brought in user b/c we need the user.id to make the API call.

    //const { user } = this.props.auth;
    //const {history} = this.props;
    e.preventDefault();

    axios
      .post(`/api/users/${this.props.auth.user.id}/posts`, posts)
      .then(res => this.props.history.push(`/profile`));
    //.then (res => history.push(`/profile`));
  };

  render() {
    const { body } = this.state;
    return (
      <div>
        {" "}
        <Form onSubmit={this.handleSubmit}>
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
