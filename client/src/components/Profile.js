import React from "react";
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";
import { Segment, Image, Divider, Header } from "semantic-ui-react";

class Profile extends React.Component {
  state = { posts: [] };

  render() {
    const {
      auth: { user }
    } = this.props;
    return (
      <div>
        <Segment centered raised clearing>
          <Image floated="left" inline src={user.image} />
          <Header>
            {user.first_name} {user.last_name}
          </Header>
          {user.email}
        </Segment>
      </div>
    );
  }
}

export default class ConnectedProfile extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Profile {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
