import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

//the provider has the resource and the consumer asks for the resource.
export class AuthProvider extends React.Component {
  //the default state of this component
  state = { user: null };

  //history for the redirect and user object to make the axios post.
  handleRegister = (user, history) => {
    axios
      .post("/api/auth", user)
      .then(res => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
  };

  handleLogin = (user, history) => {
    axios
      .post("/api/auth/sign_in", user)
      .then(res => {
        // this is changing the value of state.
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
  };

  handleLogout = history => {
    axios.delete("/api/auth/sign_out").then(res => {
      this.setState({ user: null });
      history.push("/login");
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticated: this.state.user !== null,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: user => this.setState({ user })
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
