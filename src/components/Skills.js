import React from "react"

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from "react-bootstrap";
import GoToTop from "./GoToTop";


function Skills() {
    return (
        <>
            <Container fluid="lg" className="my-skills" id="my-skills">
                <Row>
                    <Col md={{span: 8, offset: 2}} className="text-center">
                        <div className="containerIcon">
                            <FontAwesomeIcon icon="cog" size="3x"  spin color="purple"/>
                        </div>
                        <h2>Skills & Technologies</h2>
                        <p>These are the skills and technologies I know how to use or wish to specialize in further.</p>
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default Skills;