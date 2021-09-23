import React from "react";
import Typical from "react-typical";

// import fontawesome icons
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from "react-bootstrap";


// <FontAwesomeIcon icon='laptop-code'/>
// <FontAwesomeIcon icon='drafting-compass'/>
// <FontAwesomeIcon icon='comments'/>
// <FontAwesomeIcon icon='microscope'/>


const Hero = () => {
    return (
        <>
            <Container fluid="lg" className="contact-container" id="contact">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 10, offset: 1}} className="text-center">

                        <div className="hero">
                            <div className="hero-image">
                                <img src="" alt=""/>
                            </div>

                            <div className="hero-text">
                                <h2>
                                    <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "Hi, I'm Eva! ",
                                        10000,
                                        ]}
                                    />
                                </h2>

                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "ambitious junior web developer",
                                            90000,
                                        ]}
                                    />
                                </p>

                                <p>
                                    <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "passionate about front-end design 🖌️",
                                        8000,
                                        ]}
                                    />
                                </p>

                                <p>
                                    <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "backed up with experience in:",
                                        7000,
                                        ]}
                                    />
                                 </p>
                                <p>
                                    <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "research, communication 💬 and digital marketing",
                                        6000,
                                        ]}
                                    />
                                </p>
                                <p>
                                    <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "mainly in tech and biomedical industries. 🔬",
                                        5000,
                                    ]}
                                    />
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Hero;