import React from "react";
import Typical from "react-typical";
import HeroImage from "../css/images/profile-picture.png"


// import Bootstrap elements
import {Container, Row, Col, Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Hero = () => {
    return (
        <>
            <Container fluid="lg" className="hero-container">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 10, offset: 1}} className="hero">
                            <div className="hero-image">
                                <Image className="profile-picture" src={HeroImage} alt="profile-picture" roundedCircle
                                       fluid width="250px"/>
                            </div>
                            <div className="hero-text">
                                <h3>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "Hi, I'm Eva! ",
                                            10000,
                                        ]}
                                    />
                                </h3>
                                {/*TODO: add html for additional styling: keywords in red, linebreaks so text keeps running in one go*/}
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "Ambitious junior web developer",
                                            90000,

                                        ]}
                                    />
                                </p>
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "Passionate about front-end design",
                                            8000,
                                        ]}
                                    />
                                </p>
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "Backed up with experience in",
                                            7000,
                                        ]}
                                    />
                                </p>
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "research, communication and digital marketing",
                                            6000,
                                        ]}
                                    />
                                </p>
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "mainly in tech and biomedical industries.",
                                            5000,
                                        ]}
                                    />
                                </p>
                                {/*TODO: add link to about + change arrow*/}
                                <button>Get to know me better <FontAwesomeIcon icon="chevron-circle-right"/></button>
                            </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Hero;
