import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ProjectGridItem from "../../components/ProjectGridItem";
import NavMenu from "../../components/NavMenu";
import friendfinder from "../../images/friendfinder.png";
import trivia from "../../images/trivia.png";
import hangman from "../../images/hangman.png";
import crystal from "../../images/crystal.png";





class Games extends Component {

  render() {
    return (
      <div>
      <NavMenu />
        <Container fluid>
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Games & Quizzes</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                  <ProjectGridItem
                    name="The Friend Zone"
                    src={friendfinder}
                    heroku="https://the-friend-zone.herokuapp.com/"
                    github="https://github.com/sarahlessner/friend-finder"
                    description={<p>A compatibility-based "Friend Finder" application that takes survey results from a new user, and compares them to existing users scores to find a best match. This application was not created using a database, so it is simply a comical quiz where users match with an API of silly fake friends.</p>}
                  />
                  <ProjectGridItem
                    name="Doggo Trivia"
                    src={trivia}
                    heroku="https://sarahlessner.github.io/TriviaGame/"
                    github="https://github.com/sarahlessner/triviagame"
                    description={<p>Trivia game using JavaScript and JQuery to display a set of trivia questions with the use of timers. This game shows one question at a time and moves on to the next question either when the player answers it or their time runs out. After the player has completed the quiz, their score will be displayed and they will have the option to re-start the game.</p>}
                  />
                  <ProjectGridItem
                    name="Crystal Collector"
                    src={crystal}
                    heroku="https://sarahlessner.github.io/crystal-collector/"
                    github="https://github.com/sarahlessner/crystal-collector"
                    description={<p>The crystals game was built with HMTL, CSS, Javascript/JQuery and it generates a random number that the user must try to reach without going over.</p>}
                  />
                  <ProjectGridItem
                    name="Hangman"
                    src={hangman}
                    heroku="https://sarahlessner.github.io/Hangman-Game/"
                    github="https://github.com/sarahlessner/hangman-game"
                    description={<p>Classic game wherein users receive a word to try to guess. The number of characters in the word are revealed and letters are filled in as the user makes correct guesses. Too many incorrect guesses will "hang" the "man" This game is puppy themed so users are prompted to guess a breed of dog. When they guess correctly, a picture of a puppy is displayed.</p>}
                  />
                </div>
            </div>
        </section>
        </Container>
      </div>
    );
  }
}

export default Games;
