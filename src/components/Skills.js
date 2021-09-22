import React from "react"

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col, Table} from "react-bootstrap";
import GoToTop from "./GoToTop";


function Skills() {
    return (
        <>
            <Container fluid="lg" className="my-skills" id="my-skills">
                <Row>
                    <Col md={{span: 10, offset: 1}} className="text-center">
                        <div className="containerIcon">
                            <FontAwesomeIcon icon="cog" size="3x"  spin color="purple"/>
                        </div>
                        <h2>Skills & Tech Stack</h2>
                        <div className="skills-text">
                            <p>These are the skills and technologies I know how to use or wish to specialize in further.</p>
                        </div>
                        <Col md={{span: 8, offset: 2}} className="skills-table">
                            <Table   hover>
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