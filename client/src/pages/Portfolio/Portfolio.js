import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Portfolio extends Component {
  state = {

  };

  render() {
    return (
      <div className="mainMenu">
        <h1><Link to="/projects">Projects</Link></h1>
        <h1><Link to="/bio">About Me</Link></h1>
        <h1><Link to="/contact">Contact</Link></h1>

      </div>
    );
  }
}

export default Portfolio;
