import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user}</h1>
        <img src={this.props.imgPath}></img>
        <h2>{this.props.roomDone}</h2>
        <h2>{this.props.escapeDone}</h2>
        <h2>{this.props.date}</h2>
        <h2>{this.props.team}</h2>
      </div>
    )
  }
}
