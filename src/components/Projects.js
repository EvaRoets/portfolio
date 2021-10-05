import React from "react";
import GoToTop from "./GoToTop";

// import Bootstrap elements
import {Container, Row, Col, Card, Button, Badge} from "react-bootstrap";

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
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-button">
                                    <Button>See code <FontAwesomeIcon icon="chevron-circle-right"/></Button>
                                    <Button>See result <FontAwesomeIcon icon="chevron-circle-right"/></Button>
                                    {/*https://github.com/EvaRoets/weather-app*/}
                                    {/*https://affectionate-wilson-13a015.netlify.app/*/}
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
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-button">
                                    <Button>See code  <FontAwesomeIcon icon="chevron-circle-right"/></Button>
                                    <Button>See result  <FontAwesomeIcon icon="chevron-circle-right"/></Button>
                                    {/*https://github.com/EvaRoets/intro-react*/}
                                    {/*https://competent-curie-7ba046.netlify.app/*/}
                                </div>
                            </Card>
                            <Card id="project-three">
                                <Card.Body>
                                    <Card.Title>An order form</Card.Title>
                                    <div className="card-badge-container">
                                        <h6>
                                            <Badge className="card-badge" bg="muted">CSS</Badge>
                                            <Badge className="card-badge" bg="muted">PHP</Badge>
                                        </h6>
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-button">
                                    <Button>See code  <FontAwesomeIcon icon="chevron-circle-right"/></Button>
                                    <Button>See result  <FontAwesomeIcon icon="chevron-circle-right"/></Button>
                                    {/*https://github.com/EvaRoets/order-form*/}

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