import React from "react";
import Typical from "react-typical";
import {Container, Row, Col, Image} from "react-bootstrap";
import HeroImage from "../css/images/profile-picture.png"


const Hero = () => {
    return (
        <>
            <Container fluid="lg" className="hero-container">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 10, offset: 1}} className="text-center">
                        <div className="hero">
                            <div className="hero-image">
                                <Image className="profile-picture" src={HeroImage} alt="profile-picture" roundedCircle
                                       fluid width="350px"/>
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
                                            "Ambitious junior web developer 💻",
                                            90000,
                                        ]}
                                    />
                                </p>
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "Passionate about front-end design 🖌️",
                                            8000,
                                        ]}
                                    />
                                </p>
                                <p>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            "Backed up with experience in:",
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
