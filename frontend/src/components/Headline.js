import React, { Component } from "react";
import './style.css';

export default class Login extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
        <link rel="stylesheet" href="./css/style2.css" media="screen" />
        <div className="header">
          <div className="container">
            <h3 className="title"><span className="accentText">H</span>eadline</h3>
            <div className="buttons">
              <h4 className="secondaryButton login">Log in</h4>
              <h4 className="primaryButton signup">Sign Up</h4>
            </div>
          </div>
        </div>
        <div className="articleTitle">
          <h4>Back to all Headlines.</h4>
          <h1>[Article Title] Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p><b>Posted on January 1, 2021</b></p>
        </div>
        <div className="sources">
          <div className="sourceCard source1">
            <h4>New York Times</h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.</p>
          </div>
          <div className="sourceCard source2">
            <h4>Wall Street Journal</h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.</p>
          </div>
        </div>
        <div className="voting">
          <h3>This is what I think...</h3>
          <div className="votingButtons">
            <h4 className="secondaryButton vote">Support</h4>
            <h4 className="secondaryButton vote">Neutral</h4>
            <h4 className="secondaryButton vote">Disapprove</h4>
          </div>
          <canvas id="votingChart" width={600} height={200} />
        </div>
        <div className="articleTitle">
          <h4>Back to all Headlines.</h4>
          <h1>[Article Title] Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p><b>Posted on January 1, 2021</b></p>
        </div>
        <div className="footer">
          <h5>Tree Hacks 2021</h5>
        </div>
      </div>
        );
    }
}