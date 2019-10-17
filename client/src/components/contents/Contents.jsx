import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeLogged from "./HomeLogged";
import AddExperience from "./AddExperience";
import AllFriends from "./AllFriends";
import Profile from "./Profile";
import EscapeService from "./EscapeService";
import Details from "./Details";
import './Contents.css';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.userInSession,
      escapes: [],
      rooms: [],
      friends: [],
      experiences: []
    };
    this.userService = new EscapeService();
  }
  getEscapes() {
    this.userService.allEscapes().then(response => {
      this.setState({
        ...this.state,
        escapes: response
      });
    });
  }
  getRooms() {
    this.userService.allRooms().then(response => {
      this.setState({
        ...this.state,
        rooms: response
      });
    });
  }
  getFriends() {
    this.userService.myFriends().then(response => {
      this.setState({
        ...this.state,
        friends: response
      });
    });
  }
  getExperiences = () => {
    this.userService.myExperiences().then(response => {
      this.setState({
        ...this.state,
        experiences: response
      });
    });
  };
  componentDidMount() {
    this.getEscapes();
    this.getRooms();
    this.getFriends();
    this.getExperiences();
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
            <HomeLogged
              escapes={this.state.escapes}
              rooms={this.state.rooms}
              user={this.state.loggedInUser}
              friends={this.state.friends}
              experiences={this.state.experiences}
            />
          )}
        />
        <Route
          exact
          path="/add-experience"
          render={() => (
            <AddExperience
              getExperiences={this.getExperiences}
              escapes={this.state.escapes}
              rooms={this.state.rooms}
              user={this.state.loggedInUser}
              friends={this.state.friends}
              getFriends={() => this.getFriends()}
            />
          )}
        />
        <Route
          exact
          path="/all-friends"
          render={() => (
            <AllFriends
              escapes={this.state.escapes}
              rooms={this.state.rooms}
              user={this.state.loggedInUser}
              friends={this.state.friends}
              getExperiences={this.getExperiences}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => <Profile user={this.state.loggedInUser} />}
        />
        <Route
          path="/:id"
          render={() => (
            <Details
            experiences={this.state.experiences}              
            />
          )}
        />
      </Switch>
    );
  }
}

export default Contents;
