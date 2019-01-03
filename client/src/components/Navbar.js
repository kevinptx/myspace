import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location: { pathname },
      history
    } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item name="Logout" onClick={() => handleLogout(history)} />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item name="Login" id="login" active={pathname === "/login"} />
          </Link>
          <Link to="/register">
            <Menu.Item
              name="Register"
              id="register"
              active={pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="Home"
              id="home"
              active={this.props.location.pathname === "/"}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
