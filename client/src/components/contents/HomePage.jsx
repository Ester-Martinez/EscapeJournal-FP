import React, { Component } from "react";
import logo from "./../../journal-LOGO2.png";
import { Button } from "react-bulma-components";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Keep all your escape room activity in one place</h1>
        <img src={logo} alt="logo"></img>
        <h1>Please, log in or sign up to create or access your journal</h1>
        <Link to="/signup">
          <Button color="info">
            <span>Sign up</span>
          </Button>
        </Link>
        <Link to="/login">
          <Button color="primary">
            <span>Login</span>
          </Button>
        </Link>
      </div>
    );
  }
}