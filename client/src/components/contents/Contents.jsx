import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomeLogged from './HomeLogged';
import AddExperience from './AddExperience';
import AllExperiences from './AllExperiences';
import Profile from './Profile';
import EscapeService from "./components/contents/EscapeService";

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: this.props.userInSession };
    this.service = new EscapeService();
  }
  render() {
    return (
      <Switch>
      <Route exact path="/home" render={() => <HomeLogged />} />
      <Route exact path="/add-experience" render={() => <AddExperience />} />
      <Route exact path="/all-experiences" render={() => <AllExperiences  />} />
      <Route exact path="/profile" render={() => <Profile />} />
    </Switch>
      );
    
  }
}

export default Contents;