import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Projects from "../Projects";

class ProjectDetails extends Component {
  state = {

  };

  props = {

  };

  render() {
    return (
      <div className="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                      <div className="rl">
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-lg-offset-2">
                          <div className="modal-body">
                              <h2>Student Skill Swap</h2>
                              <hr />
                              <p>A bartering app targeted toward college students who want to exchange skills with each other. This is a full stack application
                                incorporating user accounts authenticated with Google. Students can get perfect matches for mutual swaps, see who is offering what they want
                                and view all skills to swap. Users have the ability to add skills wanted/offered and view/delete those skills </p>
                              <Link to="https://student-skill-swap.herokuapp.com" target="_blank"><img src="img/006-arrows.png" className="img-responsive img-centered" alt="crystal" /></Link>
                              <Link to="https://github.com/chore-swap/student-swap" target="_blank">github</Link><br />
                              <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default ProjectDetails;
