import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import AddExperience from "./AddExperience";
import "./Contents.css";
import Details from "./Details";
import EscapeService from "./EscapeService";
import HomeLogged from "./HomeLogged";
import Profile from "./Profile";


class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.userInSession,
      escapes: [],
      rooms: [],
      myfriends: [],
      experiences: [],
      allUsers: []
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
        myfriends: response
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
  getAllUsers = () => {
    this.userService.allUsers().then(response => {
      this.setState({
        ...this.state,
        allUsers: response
      });
    });
  };
  componentDidMount() {
    this.getEscapes();
    this.getRooms();
    this.getFriends();
    this.getExperiences();
    this.getAllUsers();
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
              friends={this.state.myfriends}
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
              friends={this.state.myfriends}
              getFriends={() => this.getFriends()}
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
          render={() => <Details experiences={this.state.experiences} />}
        />
      </Switch>
    );
  }
}

export default withRouter(Contents);
