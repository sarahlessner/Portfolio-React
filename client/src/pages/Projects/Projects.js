import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ProjectGridItem from "../../components/ProjectGridItem";

class Projects extends Component {
  state = {

  };

  render() {
    return (
      <Container fluid>
      <section id="portfolio">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>Portfolio</h2>
                      <hr />
                  </div>
              </div>
              <div className="row">
              <ProjectGridItem
                name="Baze"
                src="https://media.thetab.com/blogs.dir/176/files/2016/12/bart-895194-960-720.jpg"
                heroku="http://baze.herokuapp.com"
                github="https://github.com/BART-Baze/Baze"
                description={<p>A social Commuting application for users of BART - Bay Area Rapid Transit <br /><br />
                This application was created using the MERN stack <br /><br />
                Users create an account to create and view posts about experiences on BART.  Users can create text or photo posts.
                Users can delete their own posts and 'like' posts from other users.</p>}
              />
              <ProjectGridItem
                name="Student Skill Swap"
                src="https://media.thetab.com/blogs.dir/176/files/2016/12/bart-895194-960-720.jpg"
                heroku="https://student-skill-swap.herokuapp.com/"
                github="https://github.com/Chore-Swap/student-swap"
                description={<p>A bartering app targeted toward college students who want to exchange skills with each other. This is a full stack application
                  incorporating user accounts authenticated with Google.<br /><br /> Students can get perfect matches for mutual swaps, see who is offering what they want
                  and view all skills to swap. Users have the ability to add skills wanted/offered and view/delete those skills</p>}
              />
              </div>
          </div>
      </section>
      </Container>
    );
  }
}

export default Projects;
