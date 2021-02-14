import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './style.css';
import downArrowGray from './images/downArrowGray.png';
import upArrowGray from './images/upArrowGray.png';
import downArrowGreen from './images/downArrowGreen.png';
import upArrowGreen from './images/upArrowGreen.png';
// import pieChart from "./components/PieChart";

export default class Headline extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div style={{backgroundColor:"#F3F3F4"}}>
            <div className="header">
                <div className="container">
                  <Link to="/"><h2 className="title"><span className="accentText">H</span>eadline</h2></Link>
                    <div className="buttons">
                    <Link to="/login"><h4 className="secondaryButton login">Log in</h4></Link>
                    <Link to="/signup"><h4 className="primaryButton signup">Sign Up</h4></Link>
                    </div>
                </div>
                </div>

        <div class="articleTitle">
            <Link to="/"> <a href="default.html"><h4>Back to all Headlines.</h4></a></Link>
            <h1>Silicon Valley’s Safe Space</h1>
            <p><b>Posted on February 13, 2021</b></p>
        </div>
        <div class="sources">
            <div class="sourceCard source1">
                <h4>New York Times</h4>
                <p>Slate Star Codex was a window into the psyche of many tech leaders building our collective future. Then it disappeared.<br/>...</p>
            </div>
            <div class="sourceCard source2">
                <h4>Deccan Herald</h4>
                <p>It was nominally a blog, written by a Bay Area psychiatrist who called himself Scott Alexander<br />...</p>
            </div>

        </div>

        <div class="voting">
            <h3>This is what I think...</h3>
            <div class="votingButtons">
                <h4 class="secondaryButton vote">Support</h4>
                <h4 class="secondaryButton vote">Neutral</h4>
                <h4 class="secondaryButton vote vote3">Disapprove</h4>
            </div>
            
        </div>

        <div class="commentSection">
            <form action="" method="post" class="commentForm">
                <input type="text" name="reply" id="reply" 
                value="Share your thoughts..." onfocus=" this.value='';"
                rows="10" tabindex="1" required="required"/>
                <h4 class="primaryButton commentButton">Comment</h4>
            </form>
            <div class="prevComments">
                <div class="prevComment">
                    <div class="commentContent">
                        <p><b>Eric M.</b></p> 
                        <div class="commentText">
                            <p>This twitter thread is interesting and relevant: <a href="https://twitter.com">twitter.com</a></p>
                        </div>
                        <div class="upDownVote">
                            <div class="arrows">
                                <img src={upArrowGray} width="20"/>
                                <img class="bottomArrow" src={downArrowGray} width="20"/>
                            </div>
                            <h3 class="score">25</h3>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="prevComment">
                    <div class="commentContent">
                        <p><b>Emily P.</b></p> 
                        <div class="commentText">
                            <p>I like how a wide range of topics are accepted with Slate Star Codex.</p>
                        </div>
                        <div class="upDownVote">
                            <div class="arrows">
                                <img src={upArrowGray} width="20"/>
                                <img class="bottomArrow" src={downArrowGray} width="20"/>
                            </div>
                            <h3 class="score">3</h3>
                        </div>
                    </div>
                    <hr/>
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