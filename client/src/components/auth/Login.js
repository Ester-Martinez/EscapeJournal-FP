// auth/Signup.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import AuthService from "./AuthService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h3>Please, login to access your journal</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
                placeholder="Username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right ok">
                <i class="fas fa-check"></i>
              </span>
              <span class="icon is-small is-right not-ok">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
            <p class="help is-danger">This username is invalid</p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
                placeholder="Please, choose a password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span class="icon is-small is-right is-ok">
                <i class="fas fa-check"></i>
              </span>
              <span class="icon is-small is-right is-not-ok">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">
              The password must contain at least 8 characters and at least one
              of them has to be a number
            </p>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <Link to="/public">
                <Button color="danger" inverted={true}>
                  <span>Back to home</span>
                </Button>
              </Link>
            </div>
            <div class="control">
              <input type="submit" value="Login" class="button is-link" />
            </div>
          </div>
        </form>
        <h1>{this.state.error ? 'There seems to be an error. Please, try again' : ''}</h1>
      </div>
    );
  }
}

export default Login;
