import React, { Component } from 'react'
import logo from './../../journal-LOGO2.png'

export default class HomePage extends Component {
  render() {
    return (
      <div>
      <h1>Keep all your escape room activity in one place</h1>
        <img src={logo} alt="logo"></img>
        <h1>Please, log in or sign up to create or access your journal</h1>
      </div>
    )
  }
}
