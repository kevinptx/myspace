import React from "react";
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";
import { Segment, Image, Divider, Header } from "semantic-ui-react";

class Profile extends React.Component {
  state = { posts: [] };

  //to add posts, the following files were edited: Profile.js, PostForm.js and the posts_controller as well as the routes. 
  render() {
    //we are pulling the user object off from props. we're creating a variable called user that comes from this.props.auth.user
    const {
      auth: { user }
    } = this.props;
    return (
      <div>
        <Segment centered raised clearing>
          <Image floated="left" inline src={user.image} />
          <Header>
            {/* if we didn't destructure, we would have to write this.props.auth.user.first_name, etc... */}
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
