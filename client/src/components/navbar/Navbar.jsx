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
  



        {/*++]*********************************************** Aquí acaba la nueva */}
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

              {/* 
            This makes the mobile menu appear. TODO in responsive design.
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
            </div>

            <div id="JournalNavbar" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/add-experience" className="navbar-item">
                  Add experience
                </Link>
                <Link to="/all-experiences" className="navbar-item">
                  My friends
                </Link>
                <Link to="/profile" className="navbar-item">
                  My profile
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <h2>Hi, {this.state.loggedInUser.name}</h2>
                </div>

                <div className="navbar-item" onClick={this.handleLogout}>
                  <Button color="danger">
                    <span>Logout</span>
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/*      <li>
              <a onClick={this.handleLogout}>Logout</a>
             </li>
             <li>
               <Link to="/signup">Search</Link>
             </li>
           </ul> */}

          {/* <div className="header">
             <h2>Welcome {this.state.loggedInUser.username} - Ironhacker</h2>
           </div>
         </nav> */}
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
