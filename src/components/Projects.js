import React from "react";
import GoToTop from "./GoToTop";

// import Bootstrap elements
import {Container, Row, Col, Card, Badge} from "react-bootstrap";

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Projects = () => {
    return (
        <>
            <Container fluid="lg" className="projects-container" id="projects">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 10, offset: 1}} className="text-center">
                        <div className="containerIcon">
                            <FontAwesomeIcon icon="code" size="3x" color="#79B4B7"/>
                        </div>
                        <h2>Projects</h2>
                        <div className="projects-text">
                            <p>Would you like to get a better idea of my work? <br/> Here are some of my star projects.
                            </p>
                        </div>
                        <div className="projects-gallery">
                            {/*TODO: add bootstrap popover with picture*/}
                            <Card id="project-one">
                                <Card.Body>
                                    <Card.Title>A Weather App</Card.Title>
                                    <div className="card-badge-container">
                                        <h6>
                                            <Badge className="card-badge" bg="muted">CSS</Badge>
                                            <Badge className="card-badge" bg="muted">JS</Badge>
                                            <Badge className="card-badge" bg="muted">API</Badge>
                                        </h6>
                                    </div>
                                    <Card.Text>
                                        A project targeted at aggregating and parsing API fetched data, DOM manipulation and responsiveness, with an added frosted glass effect.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-button-container">
                                    <div className="card-button-top">
                                        <a href="https://github.com/EvaRoets/weather-app">
                                            See code&nbsp;<FontAwesomeIcon icon="chevron-circle-right"/>
                                        </a>
                                    </div>
                                    <div className="card-button-bottom">
                                        <a href="https://affectionate-wilson-13a015.netlify.app/">
                                            See result&nbsp;<FontAwesomeIcon icon="chevron-circle-right"/>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                            <Card id="project-two">
                                <Card.Body>
                                    <Card.Title>A to-do list</Card.Title>
                                    <div className="card-badge-container">
                                        <h6>
                                            <Badge className="card-badge" bg="muted">CSS</Badge>
                                            <Badge className="card-badge" bg="muted">JS</Badge>
                                            <Badge className="card-badge" bg="muted">React</Badge>
                                        </h6>
                                    </div>
                                    <Card.Text>
                                        An introduction project into React, exploring a live server and basic hooks for
                                        managing state and reactivity.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-button-container">
                                    <div className="card-button-top">
                                        <a href="https://github.com/EvaRoets/intro-react">
                                            See code&nbsp;<FontAwesomeIcon icon="chevron-circle-right"/>
                                        </a>
                                    </div>
                                    <div className="card-button-bottom">
                                        <a href="https://competent-curie-7ba046.netlify.app/">
                                            See result&nbsp;<FontAwesomeIcon icon="chevron-circle-right"/>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                            <Card id="project-three">
                                <Card.Body>
                                    <Card.Title>An Arcade</Card.Title>
                                    <div className="card-badge-container">
                                        <h6>
                                            <Badge className="card-badge" bg="muted">CSS</Badge>
                                            <Badge className="card-badge" bg="muted">JS</Badge>
                                        </h6>
                                    </div>
                                    <Card.Text>
                                        A team project focussed on JS and GIT best practices and animations, resulting
                                        in an arcade gaming platform with <i>Brick Breaker</i>, <i>Connect
                                        Four</i>, <i>Hangman</i>,<i>Snake</i> and
                                        <i>Space Invaders</i>.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-button-container">
                                    <div className="card-button-top">
                                        <a href="https://github.com/EvaRoets/end-with-a-bang">
                                            See code&nbsp;<FontAwesomeIcon icon="chevron-circle-right"/>
                                        </a>
                                    </div>
                                    <div className="card-button-bottom">
                                        <a href="https://wizardly-almeida-49c84a.netlify.app/">
                                            See result&nbsp;<FontAwesomeIcon icon="chevron-circle-right"/>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default Projects;