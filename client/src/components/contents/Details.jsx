import React, { Component } from "react";
import EscapeService from "./EscapeService";
import { withRouter } from "react-router-dom";
import Item from "./Item";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render:false
    };
    this.userService = new EscapeService();
  }
  componentDidMount() {
    this.getExperience();
  }

  getExperience() {
    let id = this.props.match.params.id;
    this.userService.oneExperience(id).then(response => {
      this.setState({
        ...this.state,
        experience: response,
        escapeDone: response.escapeDone,
        roomDone: response.roomDone,
        owner: response.owner,
        team: response.team
      });
    });
  };
  getTeamMembers(team) {
    let teamMembers = [];
    team.forEach(element => {
      teamMembers.push(element.friendName);
    });
    return teamMembers.join(", ");
  }
  checkToSend() {
    if (
      !this.state.experience ||
      !this.state.escapeDone ||
      !this.state.roomDone ||
      !this.state.owner ||
      !this.state.team
    ) {
return false
    } else {
      return true
    }
  }
  render() {
    return (
      this.checkToSend() ? <Item
        user={this.state.owner.name}
        imgPath={this.state.experience.imgPath}
        roomDone={this.state.roomDone.name}
        escapeDone={this.state.escapeDone.name}
        date={this.state.experience.date}
        team={this.getTeamMembers(this.state.team)}
      ></Item> : <p>Loading...</p>
    );
  }
}
export default withRouter(Details);
