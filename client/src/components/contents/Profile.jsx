import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    let numberOfFriends = this.props.user.friends.length
    let numberOfRooms = this.props.user.experiences.length
    return (
      <div>
        <h1>Hi, {this.props.user.name}</h1>
        <p>Your username is: {this.props.user.username}</p>
        <p>Your email is: {this.props.user.email}</p>
        <p>You have {numberOfFriends} friends</p>
        <p>You have done {numberOfRooms} escape rooms</p>
      </div>
    )
  }
}
