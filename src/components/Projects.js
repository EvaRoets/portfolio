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
                        <h2>Apps I have built</h2>
                        <div className="projects-gallery">
                            <Card id="project-one">
                                <Card.Img variant="top" src=""/>
                                <Card.Body>
                                    <Card.Title>A Weather App</Card.Title>
                                    <h6>
                                        <Badge bg="muted">CSS</Badge>
                                        <Badge bg="muted">JS</Badge>
                                        <Badge bg="muted">API</Badge>
                                    </h6>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button>Inspect the code</Button>
                                    {/*https://github.com/EvaRoets/weather-app*/}
                                    <Button>Check out the project</Button>
                                    {/*https://affectionate-wilson-13a015.netlify.app/*/}
                                </Card.Body>
                            </Card>
                            <Card id="project-two">
                                <Card.Img variant="top" src=""/>
                                <Card.Body>
                                    <Card.Title>Your to-do list</Card.Title>
                                    <h6>
                                        <Badge bg="muted">CSS</Badge>
                                        <Badge bg="muted">JS</Badge>
                                        <Badge bg="muted">React</Badge>
                                    </h6><Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Inspect the code</Button>
                                    {/*https://github.com/EvaRoets/intro-react*/}
                                    <Button variant="primary">Check out the project</Button>
                                    {/*https://competent-curie-7ba046.netlify.app/*/}
                                </Card.Body>
                            </Card>
                            <Card id="project-three">
                                <Card.Img variant="top" src=""/>
                                <Card.Body>
                                    <Card.Title>Order form</Card.Title>
                                    <h6>
                                        <Badge bg="muted">CSS</Badge>
                                        <Badge bg="muted">PHP</Badge>
                                    </h6>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Inspect the code</Button>
                                    {/*https://github.com/EvaRoets/order-form*/}
                                    <Button variant="primary">Check out the project</Button>
                                </Card.Body>
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