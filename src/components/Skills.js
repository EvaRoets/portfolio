import React from "react";
import GoToTop from "./GoToTop";

// import Bootstrap elements
import {Container, Row, Col, Table} from "react-bootstrap";

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
                        <h2>Skills & Tech Stack</h2>
                        <div className="skills-text">
                            <p>These are the skills and technologies I know how to use or wish to specialize in
                                further.</p>
                        </div>
                        <Col md={{span: 8, offset: 2}} className="skills-table">

                            {/*TODO add icons for tech stacks*/}
                            <Table hover>
                                <tbody>
                                <tr>
                                    <td>HTML/CSS</td>
                                    <td>PHP</td>
                                    <td>Indesign</td>
                                    <td>WordPress</td>

                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>Laravel</td>
                                    <td>Illustrator</td>
                                    <td>SEO/SEA</td>

                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td>GIT</td>
                                    <td>PhotoShop</td>
                                    <td>Digital Marketing</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>

                        {/*<div className="skills-table">*/}
                        {/*   */}
                        {/*</div>*/}
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default Skills;