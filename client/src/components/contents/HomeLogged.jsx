import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bulma-components'
import Experience from "./Experience";
import "./HomeLogged.css";


export default class HomeLogged extends Component {
  render() {
    return (
      <div className="cards">
              {/* {this.state.experiences.map(beer => {
          return (
              <Experience
              // key={beer._id}
              // target={beer._id}
              // src={beer.image_url}
              // image_alt={beer.image_url}
              // name={beer.name}
              // tagline={beer.tagline}
              // contributed_by={beer.contributed_by}
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