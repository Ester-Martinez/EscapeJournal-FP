import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionIcons,
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { Whatsapp, Telegram } from "react-social-sharing";
import "./Experience.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/typography/dist/mdc.typography.css";

 class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <div className="mdc-card card">
        <Card style={{ width: "20rem" }}>
          <Link
            to={this.props.experienceId}
            className="image"
          >
            <CardPrimaryAction>
              <CardMedia
                sixteenByNine
                style={{
                  backgroundImage: `url(${this.props.imgPath})`
                }}
              />
            </CardPrimaryAction>
          </Link>
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

          <CardActions>
            <CardActionIcons>
              <Whatsapp
                className="icon"
                solid
                small
                message={`I just did an awesome escape called ${this.props.roomDone} at ${this.props.escapeDone}. You should go! Check out this web, where I post all my game pictures`}
                link={`${process.env.REACT_APP_API_URL}${this.props.experienceId}`}
              />
              <Telegram
                className="icon"
                solidcircle
                small
                link={`I just did an awesome escape called ${this.props.roomDone} at ${this.props.escapeDone}. You should go! Check out this web, where I post all my game pictures ${process.env.REACT_APP_API_URL}${this.props.experienceId}`}
              />
            </CardActionIcons>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default withRouter(Experience)