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
                        <Col md={{span: 8, offset: 2}} className="text-center">
                            <div className="skills">
                                <h6>
                                    <Badge className="skills-badge-premium" bg="muted">PhotoShop</Badge>
                                    <Badge className="skills-badge-top" bg="muted">GIT</Badge>
                                </h6>
                                <h6>
                                    <Badge className="skills-badge-medium" bg="muted">JS</Badge>
                                    <Badge className="skills-badge-top" bg="muted">PHP</Badge>
                                    <Badge className="skills-badge-medium" bg="muted">React</Badge>
                                    <Badge className="skills-badge-premium" bg="muted">WP</Badge>

                                </h6>
                                <h6>
                                    <Badge className="skills-badge-top" bg="muted">HTML</Badge>
                                    <Badge className="skills-badge-medium" bg="muted">CSS</Badge>
                                    <Badge className="skills-badge-basic" bg="muted">SASS</Badge>
                                    <Badge className="skills-badge-medium" bg="muted">Translation</Badge>
                                    <Badge className="skills-badge-premium " bg="muted">Copy</Badge>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Badge className="skills-badge-resume" bg="muted">
                                        <div className="skills-button">
                                            <a href="../css/documents/CV_Eva_ROETS_2021_English.pdf" target="_blank" rel="noopener">
                                                Resume &nbsp;<FontAwesomeIcon icon="chevron-circle-right"/>
                                            </a>
                                        </div>
                                    </Badge>
                                    <Badge className="skills-badge-pebble1" bg="muted">00</Badge>
                                </h6>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default Skills;