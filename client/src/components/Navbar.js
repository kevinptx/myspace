import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      //auth is what named the obj that came from AuthConsumer.
      auth: { user, handleLogout },
      //location and history are coming from react router.
      location,
      history
    } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              as={Link}
              to="/newpost"
              id="newpost"
              name="New Post"
              color="green"
            >
              {" "}
              New Post
            </Button>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/profile"
            id="profile"
            name="Profile"
            active={location.pathname === "/profile"}
          />
          <Menu.Item name="Logout" onClick={() => handleLogout(history)} />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/login"
            id="login"
            name="Login"
            active={location.pathname === "/login"}
          />
          <Menu.Item
            as={Link}
            to="/register"
            id="register"
            name="Register"
            active={location.pathname === "/register"}
          />
        </Menu.Menu>
      );
    }
  };

  userNavItems = () => {
    //this is creating a variable.
    const {
      auth: { user, handleLogout },
      location,
      history
    } = this.props;

    if (user) {
      return (
        <Menu.Menu>
          <Menu.Item
            as={Link}
            to="/users"
            id="users"
            name="Users"
            active={location.pathname === "/users"}
          />
          <Menu.Item
            as={Link}
            to="/postfeed"
            id="postfeed"
            name="All Posts"
            active={location.pathname === "/postfeed"}
          />
        </Menu.Menu>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            id="home"
            name="Home"
            active={this.props.location.pathname === "/"}
          />
          {this.userNavItems()}
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
