import React from "react";
import GoToTop from "./GoToTop";

// import Bootstrap elements
import {Container, Row, Col} from "react-bootstrap";

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <>
            <Container fluid="lg" className="contact-container" id="contact">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 10, offset: 1}} className="text-center">
                        <div className="containerIcon">
                            <FontAwesomeIcon icon={['far', 'address-card']} size="3x" spin color="green"/>
                        </div>
                        <h2>Contact</h2>
                        <div className="contact">
                            <div className="contact-text">
                                <p>
                                    Do you have any questions <br/>
                                    or would you like to know more <br/>
                                    about my services? <br/>
                                    Let's get in touch! &nbsp; <FontAwesomeIcon icon="angle-double-right"/>
                                </p>
                            </div>
                            <div className="contact-icons">
                                <FontAwesomeIcon icon="mobile-alt" size="2x" className="socialIcon"/>
                                <FontAwesomeIcon icon={['far', 'envelope-open']} size="2x" className="socialIcon"/>
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" className="socialIcon"/>
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="socialIcon"/>
                            </div>

                            <div className="contact-details">
                                <div className="contact-mobile">
                                    <FontAwesomeIcon icon="mobile-alt" size="2x" className="socialIcon"/>
                                    <a href="tel:+32493140480">+32 493 140 480</a>
                                </div>

                                <div className="contact-email">
                                    <FontAwesomeIcon icon={['far', 'envelope-open']} size="2x" className="socialIcon"/>
                                    <a href="mailto:eva_roets@hotmail">eva_roets@hotmail</a>
                                    <button className="copy-email" onClick="CopyToClipboard('email')">
                                        <FontAwesomeIcon icon={['far', 'copy']} size="1x"/>
                                        <span className="tooltiptext"/>
                                    </button>
                                </div>

                                <div className="contact-li">
                                    <a href="https://www.linkedin.com/in/evaroets/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x"
                                                         className="socialIcon"/>
                                        https://www.linkedin.com/in/evaroets/</a>
                                </div>

                                <div className="contact-gh">
                                    <a href="https://github.com/EvaRoets" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="socialIcon"/>
                                        https://github.com/EvaRoets</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default Contact;