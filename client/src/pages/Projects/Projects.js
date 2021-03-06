import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import ProjectGridItem from "../../components/ProjectGridItem";
import burger from "../../images/burger.png";
import baze from "../../images/baze.png";
import swap from "../../images/swap.png";
import bart from "../../images/bart.png";
import bamazon from "../../images/bamazon.png";
import nyt from "../../images/nyt.png";
import scheduler from "../../images/scheduler.png";
import scraper from "../../images/scraper.png";
import NavMenu from "../../components/NavMenu";





class Projects extends Component {

  render() {
    return (
      <div className="page-background">
        <NavMenu />
        <Container fluid>
          <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Project Portfolio</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                  <ProjectGridItem
                    name="Baze"
                    src={baze}
                    heroku="http://baze.herokuapp.com"
                    github="https://github.com/BART-Baze/Baze"
                    description={<p>A social Commuting application for users of BART - Bay Area Rapid Transit <br /><br />
                    This application was created using the MERN stack <br /><br />
                    Users create an account to create and view posts about experiences on BART.  Users can create text or photo posts.
                    Users can delete their own posts and 'like' posts from other users.</p>}
                  />
                  <ProjectGridItem
                    name="Student Skill Swap"
                    src={swap}
                    heroku="https://student-skill-swap.herokuapp.com/"
                    github="https://github.com/Chore-Swap/student-swap"
                    description={<p>A bartering app targeted toward college students who want to exchange skills with each other. This is a full stack application
                      incorporating user accounts authenticated with Google.<br /><br /> Students can get perfect matches for mutual swaps, see who is offering what they want
                      and view all skills to swap. Users have the ability to add skills wanted/offered and view/delete those skills</p>}
                  />
                  <ProjectGridItem
                    name="BART Upstream"
                    src={bart}
                    heroku="https://sarahlessner.github.io/bart-upstream/"
                    github="https://github.com/sarahlessner/bart-upstream"
                    description={<p>Train Tracking App using BART (Bay Area Rapid Transit) API to display trip plans and real time train data. Users have the ability to "upstream" by selecting a via station. Users can see data for real time trains at their origin and upstream station.</p>}
                  />
                  <ProjectGridItem
                    name="New York Times Search"
                    src={nyt}
                    heroku="https://nytimes-news-search.herokuapp.com/"
                    github="https://github.com/sarahlessner/NYT-Search"
                    description={<p>This application uses a New York Times API to perform search queries. This application was built using React, Node, Express and Mongo. Users can search for an article topic by a certain date range. They can save search results to a database. The existing saved articles display below the search results. The user can delete articles.</p>}
                  />
                  <ProjectGridItem
                    name="News Scraper"
                    src={scraper}
                    heroku="https://entertainment-news-scrape.herokuapp.com/"
                    github="https://github.com/sarahlessner/news-scraping"
                    description={<p>A news scraper application which scrapes the Buzzfeed Entertainment page. When visiting the page, the current front page is scraped and displayed to the user. The user can visit the archive to view articles previously scraped and stored to the database.</p>}
                  />
                  <ProjectGridItem
                    name="Burger Logger"
                    src={burger}
                    heroku="https://eat-more-burgers.herokuapp.com/"
                    github="https://github.com/sarahlessner/Burger-Sequelized"
                    description={<p>A simple application where users can keep track of burgers they have eaten. The page displays a list of burgers to be eaten and a list of burgers the user has already eaten. Users may add a new burger to the list to be devoured. This application was built using node, express, javascript/jquery and uses mySQL/Sequelize.</p>}
                  />
                  <ProjectGridItem
                    name="Bamazon"
                    src={bamazon}
                    heroku=""
                    github="https://github.com/sarahlessner/bamazon"
                    description={<p>E commerce back end appliation using mySQL. This app allows initial choice of user view, manager view or supervisor view. Users can purchase product. Managers and Supervisors can manage inventory and access sales reports. Demo video in ReadMe.</p>}
                  />
                  <ProjectGridItem
                    name="Train Scheduler"
                    src={scheduler}
                    heroku="https://sarahlessner.github.io/train-scheduler/"
                    github="https://github.com/sarahlessner/train-scheduler"
                    description={<p>A train schedule application that allows the user (administrator) to add trains to the scheduler.
                      It incorporates Firebase to host arrival and departure data. The app will provide up-to-date information about various
                      trains, namely their arrival times and how many minutes remain until they arrive at their station.</p>}
                  />
                  <div className="col-sm-4 portfolio-item">
                      <div className="portfolio-link games-link">
                          <Link to="/games">Games & Quizzes</Link>
                      </div>
                    </div>
                </div>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}

export default Projects;
