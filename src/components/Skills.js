import React from "react";
import GoToTop from "./GoToTop";

// import Bootstrap elements
import {Container, Row, Col, Badge} from "react-bootstrap";

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Skills = () => {
    return (
        <>
            <Container fluid="lg" className="skills-container" id="skills">
                <Row>
                    <Col md={{span: 10, offset: 1}} className="text-center">
                        <div className="containerIcon">
                            <FontAwesomeIcon icon="cog" size="3x" spin color="#79B4B7"/>
                        </div>
                        <h2>Skills</h2>
                        <div className="skills-text">
                            <p>These are the skills and technologies I know how to use or wish to specialize in
                                further.</p>
                        </div>
                        <Col md={{span: 8, offset: 1}} className="skills">
                            <h6>
                                <Badge bg="muted">CSS</Badge>
                                <Badge bg="muted">JS</Badge>
                                <Badge bg="muted">React</Badge>
                            </h6>
                            <h6>

                                <Badge className="skills-badge-premium " bg="muted">Copywriting</Badge>
                            </h6>

                            <h6>
                                <Badge className="skills-badge-top" bg="muted">Digital Marketing</Badge>
                                <Badge className="skills-badge-top" bg="muted">PhotoShop</Badge>
                                <Badge className="skills-badge-top" bg="muted">GIT</Badge>
                            </h6>

                            <h6>
                                <Badge className="skills-badge-medium" bg="muted">JavaScript</Badge>
                                <Badge className="skills-badge-medium" bg="muted">React</Badge>
                                <Badge className="skills-badge-medium" bg="muted">GIT</Badge>

                            </h6>
                            <h6>
                                <Badge className="skills-badge-basic" bg="muted">HTML</Badge>
                                <Badge className="skills-badge-basic" bg="muted">CSS</Badge>
                                <Badge className="skills-badge-basic" bg="muted">SASS</Badge>
                                <Badge className="skills-badge-basic" bg="muted">WordPress</Badge>
                            </h6>
                        </Col>

                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default Skills;