import React, { Component } from "react";
import './HomePage.css'
import { Link } from "react-router-dom";
import {Button} from 'react-bulma-components'

export default class HomePage extends Component {
 
  render() {
    return (
      <div className="homepage">
        <h1>Keep all your escape room activity in one place</h1>
        <h2>Please, log in or sign up to create or access your journal</h2>
        <div className="field is-grouped">
        <Link to="/signup">
          <Button color="info" className="is-medium">
            <span>Sign up</span>
          </Button>
        </Link>
        <Link to="/login">
          <Button color="primary" className="is-medium">
            <span>Login</span>
          </Button>
        </Link>
        </div>
      </div>
    );
  }
}