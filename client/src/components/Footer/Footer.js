import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "../../pages/ProjectDetails";
import { Modal, OverlayTrigger, Popover, Tooltip, Button } from 'react-bootstrap';

class Footer extends Component {


  render() {
    return (
      <footer className="text-center navbar-fixed-bottom" id="connect">
          <div className="footer-above">
              <div className="container">
                  <div className="row">
                      <div className="footer-col col-md-12">
                          <ul className="list-inline">
                              <li><a href="https://www.github.com/sarahlessner" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>

                              <li><a href="https://www.linkedin.com/in/sarahlessner" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>

                              <li><a href="http://stackoverflow.com/users/7697729/sarah-lessner" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a></li>

                              <li><a href="https://angel.co/sarahlessner" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
  }

}

export default Footer;
