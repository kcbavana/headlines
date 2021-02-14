import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from "axios";
import './style.css';

export default class Default extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewCompleted: false,
        activeItem: {
          title: "",
          description: "",
          completed: false
        },
        headlines: []
      };
    }

    componentDidMount() {
      this.refreshList();
    }
    refreshList = () => {
      axios
        .get("http://localhost:8000/api/articles/")
        .then(res => this.setState({ headlines: res.data }))
        .catch(err => console.log(err));
    };

    render() {
      const listitems = this.state.headlines.map((headline) =>
        <div class="headlineCard" key={headline.title}>{headline.title}</div>
      );
      return (
        <div>
            <div className="header">
            <div className="container">
            <Link to="/"><h2 className="title"><span className="accentText">H</span>eadline</h2></Link>
                <div className="buttons">
                <Link to="/login"><h4 className="secondaryButton login">Log in</h4></Link>
                <Link to="/signup"><h4 className="primaryButton signup">Sign Up</h4></Link>
                </div>
            </div>

            </div>
            <div className="hero">
            <h1>Get the <span className="accentText ">Full Picture</span> on Daily Headlines</h1>
            <h4>Stay up to date and make your perspective heard.</h4>
            <h4 className="primaryButton mainCTA">Let's Go!</h4>
            </div>
            <div className="news">
            <div className="today">
                <div className="titleLeft"><h3>Today's Headlines</h3></div>
                <div className="headlines">
                
                </div>
            <div>
              {listitems}
            </div>
            </div>
            <div className="past">
                <h3 className="titleLeft">Past Headlines</h3>
                <div className="headlines">
                
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
