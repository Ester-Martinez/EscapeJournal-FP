// auth/Signup.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import EscapeService from "./EscapeService";
import EscapeSelector from "./EscapeSelector";
import RoomSelector from "./RoomSelector";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escapeDone: "",
      roomsDone: "",
      team: [],
      date: "",
      imgName: "",
      imgPath: ""
    };
    this.service = new EscapeService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const escapeDone = this.state.escapeDone;
    const roomsDone = this.state.roomsDone;
    const team = this.state.team;
    const date = this.state.date;
    const imgName = this.state.imgName;
    const imgPath = this.state.imgPath;

    this.service
      .addExperience(escapeDone, roomsDone, team, date, imgName, imgPath)
      .then(response => {
        this.setState({
          escapeDone: "",
          roomsDone: "",
          team: [],
          date: "",
          imgName: "",
          imgPath: ""
        });
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  updateEscapeDone = (selectedEscapeDone) => {
    this.setState({
      ...this.state,
      escapeDone: selectedEscapeDone
    })
  }
  updateRoomDone = (selectedRoomDone) => {
    this.setState({
      ...this.state,
      roomsDone: selectedRoomDone.value,
      escapeDone: this.state.escapeDone.value
    })
  }
  render() {
    return (
      <div>
        <h3>Please, add your new experience:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Escape Name</label>
            <div className="control has-icons-left has-icons-right">
            <EscapeSelector
            className="select"
              escapes={this.props.escapes}
              isSearchable={true}
              updateEscapeDone={this.updateEscapeDone}
              placeholder="Escape room name"
            ></EscapeSelector>
            </div>
          </div>

          <div className="field">
            <label className="label">Room Name</label>
            <div className="control has-icons-left has-icons-right">
            <RoomSelector
            className="select"
            escape={this.state.escapeDone.value}
              rooms={this.props.rooms}
              isSearchable={true}
              updateRoomDone={this.updateRoomDone}
              placeholder="Room name"
            ></RoomSelector>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
                placeholder="your-email-address@email.example"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                name="password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
                type="password"
                placeholder="Please, choose a password"
                autoComplete="off"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <Link to="/public">
                <Button color="danger" inverted={true}>
                  <span>Back to home</span>
                </Button>
              </Link>
            </div>
            <div className="control">
              <input type="submit" value="Sign up" className="button is-link" />
            </div>
          </div>
        </form>
        <h1>
          {this.state.error
            ? "There seems to be an error. Please, try again"
            : ""}
        </h1>
      </div>
    );
  }
}

export default AddExperience;
