import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './style.css';

export default class Login extends Component {
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
            <h1>[Article Title] Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p><b>Posted on January 1, 2021</b></p>
        </div>
        <div class="sources">
            <div class="sourceCard source1">
                <h4>New York Times</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.</p>
            </div>
            <div class="sourceCard source2">
                <h4>Wall Street Journal</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.</p>
            </div>

        </div>

        <div class="voting">
            <h3>This is what I think...</h3>
            <div class="votingButtons">
                <h4 class="secondaryButton vote">Support</h4>
                <h4 class="secondaryButton vote">Neutral</h4>
                <h4 class="secondaryButton vote vote3">Disapprove</h4>
            </div>
            <canvas id="votingChart" width="600" height="200"></canvas>
        </div>

        <div class="commentSection">
            <form action="" method="post" class="commentForm">
                <input type="text" name="reply" id="reply" 
                value="share your thoughts..." onfocus=" this.value='';"
                rows="10" tabindex="1" required="required"/>
                <h4 class="primaryButton commentButton">Comment</h4>
            </form>
            <div class="prevComments">
                <div class="prevComment">
                    <div class="commentContent">
                        <p><b>Eric</b></p> 
                        <div class="commentText">
                            <p>This twitter thread is interesting and relevant: <a href="https://twitter.com">twitter.com</a></p>
                        </div>
                        <div class="upDownVote">
                            <div class="arrows">
                                <img src="images/upArrowGray.png" width="20"/>
                                <img class="bottomArrow" src="images/downArrowGray.png" width="20"/>
                            </div>
                            <h3 class="score">25</h3>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="prevComment">
                    <div class="commentContent">
                        <p><b>Eric</b></p> 
                        <div class="commentText">
                            <p>This twitter thread is interesting and relevant: <a href="https://twitter.com">twitter.com</a></p>
                        </div>
                        <div class="upDownVote">
                            <div class="arrows">
                                <img src="images/upArrowGray.png" width="20"/>
                                <img class="bottomArrow" src="images/downArrowGray.png" width="20"/>
                            </div>
                            <h3 class="score">25</h3>
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