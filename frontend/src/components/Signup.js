import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './style.css';

export default class Signup extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <div className="header">
                <div className="container">
                    <Link to='/'><h3 className="title"><span className="accentText">H</span>eadline</h3></Link>
                    <div className="buttons">
                    <Link to='/login'><h4 className="secondaryButton login">Log in</h4></Link>
                    </div>
                </div>
                </div>
                <div className="view">
                <main id="main-holder">
                    <h2 id="login-header">Make an Account.</h2>
                    <h2 id="login-header">Make<span className="accentText"> your perspective </span>heard.</h2>
                    <form id="login-form">
                    <div className="login-info">
                        <p className="text">First Name</p>
                    </div>
                    <input type="text" name="firstname" id="firstname-field" className="login-form-field" />
                    <div className="login-info">
                        <p className="text">Last Name</p>
                    </div>   
                    <input type="text" name="lastname" id="lastname-field" className="login-form-field" />  
                    <div className="login-info">
                        <p className="text">Email Address</p>
                    </div>   
                    <input type="text" name="email" id="email-field" className="login-form-field" />  
                    <div className="password-info">
                        <p className="text">Password</p>
                    </div>
                    <input type="password" name="password" id="password-field" className="login-form-field" />
                    <input type="submit" defaultValue="Sign Up" id="login-form-submit" />
                    </form>
                </main>
                </div>
            </div>
        );
    }
}