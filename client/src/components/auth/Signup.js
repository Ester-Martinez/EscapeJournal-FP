import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import './Signup.css'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "", name: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const name = this.state.name;

    this.service
      .signup(username, password, email, name)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          email: "",
          name: ""
        });
        this.props.getUser(response.user);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          email: email,
          name: name,
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
      <div class="signup">
        <h3>Welcome to <span>My Escape Journal</span>. Here you can create your account</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                type="text"
                placeholder="Your name"
              />
              <span className="icon is-small is-left">
                <i className="far fa-address-card"></i>
              </span>
              {this.state.name &&<span className="icon is-small is-right ok">
                <i className="fas fa-check"></i>
              </span>}
              {!this.state.name &&<span className="icon is-small is-right not-ok">
                <i className="fas fa-exclamation-triangle"></i>
              </span>}
              {!this.state.name && <p className="help is-danger">Please, enter your name</p>}
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
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
              {this.state.username && <span className="icon is-small is-right ok">
                <i className="fas fa-check"></i>
              </span>}
              {!this.state.username && <span className="icon is-small is-right not-ok">
                <i className="fas fa-exclamation-triangle"></i>
              </span>}
            </div>
            {/* {this.checkUser(this.state.username) && <p className="help is-success">This username is available</p>}
            {!this.state.username && <p className="help is-danger">This username is invalid</p>} */}
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
                placeholder="your-email-address@email.example"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              {this.state.email && <span className="icon is-small is-right is-ok">
                <i className="fas fa-check"></i>
              </span>}
              {!this.state.email && <span className="icon is-small is-right is-not-ok">
                <i className="fas fa-exclamation-triangle"></i>
              </span>}
            </div>
            {/* <p className="help is-success">This email is correct</p>
            <p className="help is-danger">This email is invalid</p> */}
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
                type="password"
                placeholder="Please, choose a password"
                autoComplete="off"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              {this.state.password.length>=8 && <span className="icon is-small is-right is-ok">
                <i className="fas fa-check"></i>
              </span>}
              {this.state.password.length<8 && <span className="icon is-small is-right is-not-ok">
                <i className="fas fa-exclamation-triangle"></i>
              </span>}
            </div>
            {this.state.password.length<8&& this.state.password.length>0 && <p className="help is-danger">
              The password must contain at least 8 characters and at least one
              of them has to be a number
            </p>}
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
              <input type="submit" value="Sign up" className="button is-link" />
            </div>
          </div>
        </form>
        <h1>{this.state.error ? 'There seems to be an error. Please, try again' : ''}</h1>
      </div>
    );
  }
}

export default Signup;
