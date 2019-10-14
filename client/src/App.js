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

  fetchUser() {
    return this.service
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
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment >
          <Redirect to="/home" />
          <div className="App">
            <header className="App-header">
            
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Contents />
            </header>
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <Redirect to="/public" />
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path="/public" render={() => <HomePage />} />
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;