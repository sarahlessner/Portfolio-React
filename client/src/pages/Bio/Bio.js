import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Bio extends Component {
  state = {

  };

  render() {
    return (
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
                      <img className="img-responsive mymug" src="img/headshot.jpg" alt="" />
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
                      <p>Please view my portfolio links to see the work I have done as a web developer. Please do not hesitate to reach out
                        via the contact form.
                      </p>

                  </div>
                  <div className="col-lg-3">
                      <h3>Skills</h3>
                      <ul>
                          <li>Javascript</li>
                          <li>HTML5</li>
                          <li>CSS3</li>
                          <li>JQuery</li>
                          <li>Node.js</li>
                          <li>Express.js</li>
                          <li>MySql</li>
                          <li>MongoDB</li>
                          <li>Firebase</li>
                          <li>Handlebars</li>
                          <li>AJAX</li>

                      </ul>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

export default Bio;
