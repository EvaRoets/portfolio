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
                            <FontAwesomeIcon icon={['far', 'address-card']} size="3x" color="#79B4B7"/>
                        </div>
                        <h2>Contact</h2>
                        <div className="contact">
                            <div className="contact-text">
                                <p>
                                    Do you have any questions <br/>
                                    or would you like to know more <br/>
                                    about my services? <br/><br/>
                                    Let's get in touch! &nbsp; <FontAwesomeIcon icon="chevron-circle-down"/>
                                </p>
                            </div>
                            <div className="contact-details">
                                {/*TODO: add bootstrap popover/overlay with tooltip*/}

                                <div className="contact-mobile">
                                    <a href="tel:+32493140480" data-toggle="tooltip"
                                       data-placement="right" title="+32 493 14 04 80">
                                        <FontAwesomeIcon icon="mobile-alt" size="4x" className="contact-icon"/>
                                    </a>
                                </div>
                                <div className="contact-email">
                                    <a href="mailto:eva_roets@hotmail" data-toggle="tooltip"
                                       data-placement="right" title="eva_roets@hotmail">
                                        <FontAwesomeIcon icon={['far', 'envelope-open']} size="4x"
                                                         className="contact-icon"/>
                                    </a>
                                </div>
                                <div className="contact-li">
                                    <a href="https://www.linkedin.com/in/evaroets/" data-toggle="tooltip"
                                       data-placement="right" title="https://www.linkedin.com/in/evaroets/"
                                       target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="4x"
                                                         className="contact-icon"/>
                                    </a>
                                </div>

                                <div className="contact-gh">
                                    <a href="https://github.com/EvaRoets" data-toggle="tooltip"
                                       data-placement="right" title="https://github.com/EvaRoets"
                                       target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'github']} size="4x" className="contact-icon"/>
                                    </a>
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