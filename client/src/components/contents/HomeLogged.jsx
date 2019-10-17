import React, { Component } from "react";
import { Button } from "react-bulma-components";
import Experience from "./Experience";
import "./HomeLogged.css";

export default class HomeLogged extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getTeamMembers(team) {
    let teamMembers = [];
    team.forEach(element => {
      teamMembers.push(element.friendName)
    });
    return teamMembers.join(', ')
  }
  render() {
    return (
      <div className="cards">
        {this.props.experiences.map((userExperience, index) => {
          return (
            <Experience
              experienceId={userExperience._id}
              user={this.props.user.name}
              imgPath={userExperience.imgPath}
              roomDone={userExperience.roomDone.name}
              escapeDone={userExperience.escapeDone.name}
              date={userExperience.date}
              team={this.getTeamMembers(userExperience.team)}
            ></Experience>
          );
        })}
      </div>
    );
  }
}
