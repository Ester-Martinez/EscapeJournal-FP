import React, { Component } from "react";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcons, 
  CardActionIcon
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import {Icon, icon} from '@rmwc/icon';
import "./Experience.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/typography/dist/mdc.typography.css";
import '@rmwc/icon/icon.css';

export default class Experience extends Component {
  render() {
    return (
      <div className="mdc-card card">
        <Card style={{ width: "25rem", }}>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: `url(${this.props.imgPath})`
              }}
            />
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <Typography use="headline6" tag="h2" style={{ marginTop: '2rem' }}>
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
                style={{ marginTop: '1rem' }}
              >
                {this.props.date} - {this.props.owner}, Luis, Tanis, Antonio
              </Typography>
            </div>
          <CardActions>
            <CardActionButtons>
              <CardActionButton>Add</CardActionButton>
              <CardActionButton>See picture</CardActionButton>
            </CardActionButtons>
          </CardActions>
        </Card>
      </div>
    );
  }
}
