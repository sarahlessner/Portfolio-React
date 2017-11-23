import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Puppy from "../../images/babygriz.JPG";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
        </Jumbotron>
        <h2>Here is a puppy to make it worth the trip</h2>
        <img className="nomatch-img" src={Puppy}/ >
      </Col>
    </Row>
  </Container>;

export default NoMatch;
