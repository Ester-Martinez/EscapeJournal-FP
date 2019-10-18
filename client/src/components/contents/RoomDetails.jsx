import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import EscapeDetails from "./EscapeDetails";

class RoomDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // room: null,
      // escape: {}
    };
  }
  componentDidMount() {
    // this.getRoom();
  }

  // getRoom() {
  //   let id = this.props.match.params.id;
  //   const room = this.props.rooms.find(roomtosearch => roomtosearch._id == id);
  //   this.setState({
  //     ...this.state,
  //     room: room
  //   });
  // }
  
  render() {
    return (
      <div>
        {/* {this.state.room ? (

        ) : <div></div>} */}
      </div>
    );
  }
}
export default withRouter(RoomDetails);
