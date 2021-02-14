import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styles from "./style.css";

export default class Default extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="header">
          <div class="container">
            <h3 class="title">
              <span class="accentText">H</span>eadline
            </h3>
            <div class="buttons">
              <Link to='/login'>
                  <h4 class="secondaryButton login">
                    Log in
                </h4>
                </Link>
              <Link to='/signup'>
                  <h4 class="primaryButton signup">
                    <ul class="current0">
                    Sign Up
                    </ul>
                </h4>
                </Link>
            </div>
          </div>
        </div>

        <div class="hero">
          <h1>
            Get the <span class="accentText">Full Picture</span> on Daily
            Headlines
          </h1>
          <h4>Stay up to date and make your perspective heard.</h4>
          <Link to='/signup'>
          <h4 class="primaryButton mainCTA">
            <ul class="current0">
              Let's Go
            </ul>
          </h4>
          </Link>
        </div>
        <div class="news">
          <div class="today">
            <div class="titleLeft">
              <h3>Today's Headlines</h3>
            </div>
            <div class="headlines">
              <h5 class="headlineCard">Sample Headline</h5>
            </div>
          </div>

          <div class="past">
            <h3 class="titleLeft">Past Headlines</h3>
            <div class="headlines">
              <h5 class="headlineCard">Sample Headline</h5>
            </div>
          </div>
        </div>
        <div class="footer">
          <h5>Tree Hacks 2021</h5>
        </div>
      </div>
    );
  }
}
