import React, { Component } from "react";
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
              roomId={userExperience.roomDone._id}
              user={userExperience.owner.name}
              imgPath={userExperience.imgPath}
              roomDone={userExperience.roomDone.name}
              roomDetails={userExperience.roomDone}
              escapeDone={userExperience.escapeDone.name}
              escapeDetails={userExperience.escapeDone}
              date={userExperience.date}
              team={this.getTeamMembers(userExperience.team)}
            ></Experience>
          );
        })}
      </div>
    );
  }
}
