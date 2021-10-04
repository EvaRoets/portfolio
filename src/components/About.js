import React from "react";
import GoToTop from "./GoToTop";

// import Bootstrap elements
import {Container, Row, Col} from "react-bootstrap";

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <>
            <Container fluid="lg" className="about-container" id="about">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 10, offset: 1}} className="text-center">
                        <div className="containerIcon">
                            <FontAwesomeIcon icon={['far', 'user']} size="3x" color="#FF5C58"/>
                        </div>
                        <h2>About me</h2>
                        <div className="about-text">
                            <p> I started off in communication and digital marketing and got a taste for web
                                development. On the exciting adventure of learning the ropes.</p>
                            <p>Wat is Lorem Ipsum?
                                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum
                                is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters
                                nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd
                                maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair
                                geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default About;