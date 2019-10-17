import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import HomePage from "./components/contents/HomePage";
import Details from "./components/contents/Details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser = () => {
    this.service
    .loggedin()
    .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment >
          <Redirect to="/home" />
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Contents userInSession={this.state.loggedInUser}/>
            </header>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Redirect to="/public" />
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path="/public" render={() => <HomePage />} />
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
          )}
        />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;