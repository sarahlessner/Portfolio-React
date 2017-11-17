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
      <div className="page-background">
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
                    <div className="col-lg-6 bio-text">
                        <h3>Bio</h3>
                        <p>I am seeking a professional opportunity as a front-end or full-stack web developer.
                          I love the culture and unique challenges in the industry, and I am eager for the chance
                          to work professionally as a developer. </p> <p>I enjoy coding and I am passionate about learning new technology.
                          I enjoy solving challenging problems and pick up on new tech quickly through hard work and dedication.
                          I was most attracted to getting into coding because there would always be more ways to learn and grow.</p>

                        <p>Back in high school, I considered studying computer science, but when it came time to attend college, I chose to pursue my passion for psychology.
                          I ultimately did not seek a career in psychology and I am happy to have found my way back to coding.</p>
                        <p>In 2015 I relocated to the bay area, I started
                          working at a large tech company on the support side. I love the culture but I found myself wanting to be involved
                          in the industry in a more technical and challenging way, so I made the decision to become a web developer.</p>
                        <p>Check out my <Link to="/projects">projects</Link> page to see the websites/apps that I have created. Please do not hesitate to reach out
                          via the <Link to="/contact">contact form.</Link>
                        </p>

                    </div>
                    <div className="col-lg-3">

                        <ul className="bio-skills">
                          <h3>Skills</h3>
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
