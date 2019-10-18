import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import AuthService from "./AuthService";
import './Login.css';

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
      <div className="login">
        <h3>Please, login to access your journal</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
                placeholder="Username"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
                placeholder="Your password"
                autoComplete="off"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <Link to="/public">
                <Button color="danger" inverted={true}>
                  <span>Back to home</span>
                </Button>
              </Link>
            </div>
            <div className="control">
              <input type="submit" value="Login" className="button is-link" />
            </div>
          </div>
        </form>
        <h1>{this.state.error ? 'There seems to be an error. Please, try again' : ''}</h1>
      </div>
    );
  }
}

export default Login;
