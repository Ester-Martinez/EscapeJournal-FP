import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import { Button } from "react-bulma-components";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/home">
                <img
                  src="house-lock.png"
                  width="28"
                  height="28"
                  alt="home-icon"
                />
              </Link>
            </div>

            <div id="JournalNavbar" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/add-experience" className="navbar-item">
                  Add experience
                </Link>
                <Link to="/profile" className="navbar-item">
                  My profile
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <h3 className="navbar-item">Hi, {this.state.loggedInUser.name}</h3>
                </div>

                <div className="navbar-item" onClick={this.handleLogout}>
                  <Button color="danger">
                    <span>Logout</span>
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
