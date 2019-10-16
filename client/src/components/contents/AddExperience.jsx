import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import EscapeService from "./EscapeService";
import EscapeSelector from "./EscapeSelector";
import RoomSelector from "./RoomSelector";
import FriendSelector from "./FriendSelector";
import CalendarForm from "./CalendarForm";
import "./AddExperience.css";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriendName: "",
      newFriendEmail: "",
      escapeDone: "",
      roomsDone: "",
      team: [],
      date: "",
      imgName: "",
      imgPath: ""
    };
    this.service = new EscapeService();
  }
  componentWillReceiveProps() {
    this.setState({ ...this.state });
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
        console.log(error);
        this.setState({
          ...this.state,
          error: true
        });
      });
  };
  handleFormSubmitFriend = event => {
    event.preventDefault();
    const newFriendName = this.state.newFriendName;
    const newFriendEmail = this.state.newFriendEmail;
    this.service
      .addFriend(newFriendName, newFriendEmail)
      .then(response => {
        this.setState({
          ...this.state,
          newFriendName: "",
          newFriendEmail: ""
        });
        this.props.getFriends();
      })
      .catch(error => {
        console.log(error);
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
  updateTeam = selectedTeam => {
    let teamMembers = []
    selectedTeam.forEach(member => teamMembers.push(member.value))
    this.setState({
      ...this.state,
      team: teamMembers
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
      <div className="new-experience">
        <div className="add-friend">
          <h3>If your friends are not on your list, add them here:</h3>
          <form onSubmit={e => this.handleFormSubmitFriend(e)}>
            <div className="field is-horizontal">
              <div className="field friend-field">
                <div className="control has-icons-left is-expanded">
                  <input
                    className="input"
                    type="text"
                    name="newFriendName"
                    value={this.state.newFriendName}
                    onChange={e => this.handleChange(e)}
                    placeholder="New Friend Name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div className="field friend-field">
                <div className="control has-icons-left is-expanded">
                  <input
                    className="input"
                    type="email"
                    name="newFriendEmail"
                    value={this.state.newFriendEmail}
                    onChange={e => this.handleChange(e)}
                    placeholder="your-friend-email-@email.example"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="field is-centered">
              <div className="control">
                <input
                  type="submit"
                  value="Add Friend"
                  className="button is-link"
                />
              </div>
            </div>
          </form>
          <br />
        </div>
        <div className="add-experience">
          <h3>Please, add your new experience:</h3>
          <form onSubmit={e => this.handleFormSubmit(e)}>
            <div className="columns">
              <div className="column-one">
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
                  <label className="label">Friends</label>
                  <div className="control">
                    <FriendSelector
                      className="select"
                      className="basic-multi-select"
                      friends={this.props.friends}
                      isSearchable={true}
                      updateTeam={this.updateTeam}
                      placeholder="Friend name"
                    ></FriendSelector>
                  </div>
                </div>
              </div>

              <div className="column-two">
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
              </div>
            </div>
            <div className="buttons">
              <div className="field is-grouped">
                <div className="control">
                  <Link to="/public">
                    <Button color="danger" inverted={true}>
                      <span>Back to home</span>
                    </Button>
                  </Link>
                </div>
                <div className="control">
                  <Button
                    type="submit"
                    color="info"
                    disabled={this.checkToSend()}
                  >
                    Save new experience
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
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
