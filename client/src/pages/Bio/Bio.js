import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import headshot from "../../images/headshot.jpg";
import NavMenu from "../../components/NavMenu";

class Bio extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <NavMenu />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About Me</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img className="img-responsive bio-img" src={headshot} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h3>Bio</h3>
                        <p>I am seeking a professional opportunity as a front-end or full-stack web developer.
                          I love the culture and unique challenges in the industry, and I am eager for the chance
                          to work professionally as a developer.</p>
                        <p>When I was younger, I enjoyed making my own geocities webpages and flexing some HTML/CSS skills on my MySpace.
                          When it came time to attend college, I chose to pursue my passion for psychology instead of computer science.
                          I ultimately did not seek a career in psychology. When I found myself in the bay area, I started
                          working at a large tech company on the support side. I love the culture but I found myself wanting to be involved
                          on the engineering side, so I made the decision to become a web developer.</p>
                        <p>You may view my portfolio to see the work I have done as a web developer. Please do not hesitate to reach out
                          via the contact form.
                        </p>

                    </div>
                    <div className="col-lg-3">
                        <h3>Skills</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>React</li>
                            <li>JQuery</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>mySQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>Handlebars</li>
                            <li>APIs</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Bio;
