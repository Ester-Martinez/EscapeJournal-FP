import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon,
  CardAction
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { Icon, icon } from "@rmwc/icon";
import "./Experience.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/typography/dist/mdc.typography.css";
import "@rmwc/icon/icon.css";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      fullscreen: false
    };
  }
  // handleSubmit = (user) => {
  //   saveUser(user)
  //     .then(() => this.setState(() => ({
  //       fullscreen: true
  //     })))
  // }



  render() {
    // if (this.state.fullscreen === true) {
    //   return <Redirect to='/dashboard' />
    // }
    return (
      <div className="mdc-card card">
        <Card style={{ width: "25rem" }}>
          <Link to="/profile">
          <CardPrimaryAction >
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: `url(${this.props.imgPath})`
              }}
            />
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <Typography
                use="headline6"
                tag="h2"
                style={{ marginTop: "2rem" }}
              >
                {this.props.roomDone}
              </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="textSecondaryOnBackground"
              >
                {this.props.escapeDone}
              </Typography>
              <Typography
                use="body1"
                tag="div"
                theme="textSecondaryOnBackground"
                style={{ marginTop: "1rem" }}
              >
                {this.props.date} - {this.props.user}, {this.props.team}
              </Typography>
            </div>
          </CardPrimaryAction>
          </Link>
          <CardActions>
            <CardActionButtons>
              <CardActionButton>Add</CardActionButton>
              {/* <CardActionButton></CardActionButton> */}
            </CardActionButtons>
            <CardActionIcons>
              <a
                className="icons"
                href={`whatsapp://send?text=El%20otro%20día%20hicimos%20la%20sala%20${this.props.roomDone}%20en%20${this.props.escapeDone}.%20Te%20la%20recomiendo.%20Puedes%20ver%20nuestra%20foto%20aquí:%20https://myescapejournal.herokuapp.com/${this.props.experienceId}`}
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i>
              </a>

              <a
                className="icons"
                href={`http://www.facebook.com/sharer.php?u=https://myescapejournal.herokuapp.com/${this.props.experienceId}`}
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>

              <CardActionIcon icon="more_vert" />
            </CardActionIcons>
          </CardActions>
        </Card>
      </div>
    );
  }
}
