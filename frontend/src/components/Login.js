import React, { Component } from "react";
import './style.css';

export default class Login extends Component {
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
                <button className="primaryButton signup">Sign Up</button>
                </div>
            </div>
            </div>
            <div className="view">
            <main id="main-holder">
                <h2 id="login-header">Welcome Back</h2>
                <form id="login-form">
                <div className="login-info">
                    <p className="text">Email</p>
                </div>
                <input type="text" name="username" id="username-field" className="login-form-field" />
                <div className="password-info">
                    <p className="text">Password</p>
                </div>
                <input type="password" name="password" id="password-field" className="login-form-field" />
                <input type="submit" defaultValue="Login" id="login-form-submit" />
                </form>
            </main>
            </div>
        </div>
        );
    }
}