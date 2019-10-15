import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bulma-components'
import Experience from "./Experience";
import "./HomeLogged.css";


export default class HomeLogged extends Component {
  render() {
    return (
      <div className="cards">
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