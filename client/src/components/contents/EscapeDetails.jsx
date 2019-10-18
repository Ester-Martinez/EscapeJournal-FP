import React, { Component } from 'react'

export default class EscapeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escape: {}
    }
  }
  componentDidUpdate() {
    

  }
  receiveEscape() {
    console.log(this.props.getEscape);
    console.log(this.props.room)
    escape = this.props.getEscape(this.props.room.escape);
  this.setState({
    ...this.state,
    escape: escape
  })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
