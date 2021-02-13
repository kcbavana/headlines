import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './style.css';

export default class Default extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <div className="header">
                <div className="container">
                    <h3 className="title"><span className="accentText">H</span>eadline</h3>
                    <div className="buttons">
                    <h4 className="secondaryButton login"><Link to="/login">Log in</Link></h4>
                    <h4 className="primaryButton signup"><ul className="current0"><a href="signup.html">Sign Up</a></ul></h4>
                    </div>
                </div>
                </div>
                <div className="hero">
                <h1>Get the <span className="accentText mainCTA">Full Picture</span> on Daily Headlines</h1>
                <h4>Stay up to date and make your perspective heard.</h4>
                <h4 className="primaryButton mainCTA">Let's Go!</h4>
                </div>
                <div className="news">
                <div className="today">
                    <div className="titleLeft"><h3>Today's Headlines</h3></div>
                    <div className="headlines">
                    <h5 className="headlineCard">Sample Headline</h5>
                    </div>
                </div>
                <div className="past">
                    <h3 className="titleLeft">Past Headlines</h3>
                    <div className="headlines">
                    <h5 className="headlineCard">Sample Headline</h5>
                    </div>
                </div>
                </div>
                <div className="footer">
                <h5>Tree Hacks 2021</h5>
                </div>
            </div>
        );
    }
}