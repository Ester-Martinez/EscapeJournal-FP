import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import EscapeService from "./EscapeService";
import EscapeSelector from "./EscapeSelector";
import RoomSelector from "./RoomSelector";
import CalendarForm from "./CalendarForm";

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
        EscapeSelector.clearValue();
        RoomSelector.clearValue();
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
  updateEscapeDone = selectedEscapeDone => {
    this.setState({
      ...this.state,
      escapeDone: selectedEscapeDone
    });
  };
  updateRoomDone = selectedRoomDone => {
    this.setState({
      ...this.state,
      roomsDone: selectedRoomDone.value,
      escapeDone: this.state.escapeDone.value
    });
  };
  updateDate = selectedDate => {
    this.setState({
      ...this.state,
      date: selectedDate
    });
  };
  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this.service
      .handleUpload(uploadData)
      .then(response => {
        this.setState({
          imgPath: response.secure_url,
          imgName: this.state.roomsDone
        });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };
  checkToSend() {
    if (
      !this.state.escapeDone ||
      !this.state.roomsDone ||
      // !this.state.team ||
      !this.state.date ||
      !this.state.imgName ||
      !this.state.imgPath
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <h3>Please, add your new experience:</h3>
        <form onSubmit={e => this.handleFormSubmit(e)}>
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
            <label className="label">Game Date</label>
            <div className="control">
              <CalendarForm updateDate={this.updateDate}></CalendarForm>
            </div>
          </div>

          <div className="file is-medium is-boxed">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="imageUrl"
                onChange={e => this.handleFileUpload(e)}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
            </label>
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
              <Button type="submit" color="info" disabled={this.checkToSend()}>
                Save new experience
              </Button>
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
