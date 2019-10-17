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
      teamMembers.push(element.friendName);
    });
    return teamMembers.join(", ");
  }
  render() {
    return (
      <div className="cards">
        {this.props.experiences.map((userExperience, index) => {
          return (
            <Experience
              key={index}
              experienceId={userExperience._id}
              user={userExperience.owner.name}
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
