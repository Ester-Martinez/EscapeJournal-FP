import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    let numberOfFriends = this.props.user.friends.length;
    let numberOfRooms = this.props.user.experiences.length;
    return (
      <div className="profile">
        <h1>Hi, {this.props.user.name}</h1>
        <div className="statistics">
          <p className="important">You have {numberOfFriends} friends</p>
          <p className="important">
            You have done {numberOfRooms} escape rooms
          </p>
        </div>
        <p className="less-important">
          Your username is: {this.props.user.username}
        </p>
        <p className="less-important">Your email is: {this.props.user.email}</p>
      </div>
    );
  }
}
