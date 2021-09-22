import React from "react"

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import the ThumbnailOne component
import ThumbnailOne from './ThumbnailOne.js';
import ThumbnailTwo from './ThumbnailTwo.js';
import ThumbnailThree from './ThumbnailThree.js';

import {Container, Row, Col} from "react-bootstrap";


function Projects() {
    return (
        <Container fluid="lg" className="my-projects" id="my-projects">
            <Row className="justify-content-sm-center-center">
                <Col md={{span: 8, offset: 2}} className="text-center">
                    <FontAwesomeIcon icon="code" size="3x"/>
                    <h2>Apps I have built</h2>
                    <p> this is what I have built during my training bootcamp at BeCode</p>

                    <div className="project-gallery">
                        <ThumbnailOne
                            link=""
                            image=""
                            title="Project 1"
                            category=""
                        />

                        <ThumbnailTwo
                            link=""
                            image=""
                            title="Project 2"
                            category=""
                        />

                        <ThumbnailThree
                            link=""
                            image=""
                            title="Project 3"
                            category=""
                        />
                    </div>


                    <a href="#top" id="top">
                        <FontAwesomeIcon icon="chevron-circle-up"/>
                        Let's go back to the top
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;