import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.imgPath} alt={this.props.roomDone}></img>
        <h1>{this.props.roomDone}</h1>
        <h2>{this.props.escapeDone}</h2>
        <h2>{this.props.date}</h2>
        <h2 className="team">{this.props.user}, {this.props.team}</h2>
      </div>
    )
  }
}
