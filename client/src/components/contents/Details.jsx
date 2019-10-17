import React, { Component } from "react";
import EscapeService from "./EscapeService";
import { withRouter } from "react-router-dom";
import Item from "./Item";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: null
    };
    this.userService = new EscapeService();
  }
  componentDidMount() {
    this.getExperience();
  }

  async getExperience() {
    let id = this.props.match.params.id;
    const experience = await this.userService.oneExperience(id)
      this.setState({
        ...this.state,
        experience: experience
      });
  }
  getTeamMembers(team) {
    let teamMembers = [];
    team.forEach(element => {
      teamMembers.push(element.friendName);
    });
    return teamMembers.join(", ");
  }

  render() {
    return !!this.state.experience ? (
      <Item
        user={this.state.experience.owner.name}
        imgPath={this.state.experience.imgPath}
        roomDone={this.state.experience.roomDone.name}
        escapeDone={this.state.experience.escapeDone.name}
        date={this.state.experience.date}
        team={this.getTeamMembers(this.state.experience.team)}
      ></Item>
    ) : (
      <p>Loading...</p>
    );
  }
}
export default withRouter(Details);
