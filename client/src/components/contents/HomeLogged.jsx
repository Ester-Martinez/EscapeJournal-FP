import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import Experience from "./Experience";
import "./HomeLogged.css";

export default class HomeLogged extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.userExperience)
    return (
      <div className="cards">
        {this.props.experiences.map(userExperience => {
          return (
            <Experience
              user={this.props.user.name}
              imgPath={userExperience.imgPath}
              roomDone={userExperience.roomDone.name}
              escapeDone={userExperience.escapeDone.name}
              date={userExperience.date}
            ></Experience>
          );
        })}
      </div>
    );
  }
}
