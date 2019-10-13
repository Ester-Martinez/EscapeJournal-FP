// auth/Signup.js
import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
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

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service
      .signup(username, password, email, name)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          email: "",
          name: ""
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
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
      <div>
        <h3>Welcome to <span>My Escape Journal</span>. Here you can create your account</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                type="text"
                placeholder="Your name"
              />
              <span class="icon is-small is-left">
                <i class="far fa-address-card"></i>
              </span>
              <span class="icon is-small is-right ok">
                <i class="fas fa-check"></i>
              </span>
              <span class="icon is-small is-right not-ok">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
              <p class="help is-danger">Please, enter your name</p>
            </div>
          </div>

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
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
                placeholder="your-email-address@email.example"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right is-ok">
                <i class="fas fa-check"></i>
              </span>
              <span class="icon is-small is-right is-not-ok">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-success">This email is correct</p>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
                type="password"
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
                <Button color="is-danger">
                  <span>Back to home</span>
                </Button>
              </Link>
            </div>
            <div class="control">
              <input type="submit" value="Sign up" class="button is-link" />
            </div>
          </div>
        </form>
        <h1>{this.state.error ? 'There seems to be an error. Please, try again' : ''}</h1>
      </div>
    );
  }
}

export default Signup;
