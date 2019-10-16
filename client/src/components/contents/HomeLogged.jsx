import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bulma-components'
import Experience from "./Experience";
import "./HomeLogged.css";


export default class HomeLogged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  checkInfo() {
    console.log(this.props.experiences.experiences)
  }
  render() {
    this.checkInfo()
    return (
      <div className="cards">
              {/* {this.props.experiences.map(experience => {
                
          return (
           
              <Experience
              imgPath={experience.imgPath}
              roomDone={experience}
              escapeDone={experience.escapeDone}
              date={experience.date}
              owner={experience.owner}
              ></Experience>
          );
        })} */}
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      <Experience></Experience>
      </div>
    );
  }
}