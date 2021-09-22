import React from "react"

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from "react-bootstrap";
import GoToTop from "./GoToTop";

function Contact() {
    return (
        <>
            <Container fluid="lg" className="contact" id="contact">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 8, offset: 2}} className="text-center">
                        <div className="containerIcon">
                            <FontAwesomeIcon icon={['far', 'address-card']} size="3x" spin  color="green"/>
                        </div>
                        <h2>Contact</h2>

                        <FontAwesomeIcon icon="mobile-alt"/>
                        <a href="tel:+32493140480">+32 493 140 480</a>

                        <div className="contact-email-container">
                            <p id="email">
                                <FontAwesomeIcon icon={['far', 'envelope-open']}/>
                                <a href="mailto:eva_roets@hotmail">eva_roets@hotmail</a>
                            </p>

                            <button className="copy-email-btn tooltip" onClick="CopyToClipboard('email')">
                                <FontAwesomeIcon icon={['far', 'copy']}/>
                                <span className="tooltiptext"></span>
                            </button>
                        </div>

                        <a href="https://www.linkedin.com/in/evaroets/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                            https://www.linkedin.com/in/evaroets/</a>

                        <a href="https://github.com/EvaRoets" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                            https://github.com/EvaRoets</a>
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default Contact;