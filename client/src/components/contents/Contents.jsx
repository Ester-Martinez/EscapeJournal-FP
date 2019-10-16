import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeLogged from "./HomeLogged";
import AddExperience from "./AddExperience";
import AllExperiences from "./AllExperiences";
import Profile from "./Profile";
import EscapeService from "./EscapeService";

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
  getExperiences() {
    this.userService.myExperiences().then(response => {
      console.log(response)
      this.setState({
        ...this.state,
        experiences: response
      });
    });
  }
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
          path="/all-experiences"
          render={() => (
            <AllExperiences
              escapes={this.state.escapes}
              rooms={this.state.rooms}
              user={this.state.loggedInUser}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => <Profile user={this.state.loggedInUser} />}
        />
      </Switch>
    );
  }
}

export default Contents;
