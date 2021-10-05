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
                            <FontAwesomeIcon icon={['far', 'user']} size="3x" color="#79B4B7"/>
                        </div>
                        <h2>About me</h2>
                        <div className="about-text">
                            <p>Hi, I'm Eva!</p>
                            <p>After having explored a plethora of student jobs - I wasn't afraid to get my hands dirty,
                                I started off my <b>professional career in customer service roles</b>. Although I'm quite the
                                smooth communicator, as a true language aficionado I craved more creativity.</p>
                            <p>Life brought propelled me towards <b>communication and digital marketing</b>, mainly for SMEs
                                in the tech industry. Not only did I get the coveted opportunity to play my magic as a
                                wordsmith. I also got a passion for web design and development.
                            </p>
                            <p>After going on the exciting adventure of travelling the world - yes, I'm one of those
                                cliché millennials - I swiftly made a sharp turn right and I mustered up the courage to
                                learning to ropes, particularly <b>specialising in front-end development</b>.</p>
                            <p>What else do you absolutely need to know about me? When I'm not <i>D&D'ing</i> (designing
                                and developing, duh), I enjoy spending time outside - either while travelling (even
                                more) or sniffing up that fresh nature air. I'm also very fond of chasing away my feline
                                four-legged friends with some singing. And since I'm a avid learner of just about
                                anything, you can find me enrolled in one too many courses I was, of course, just about to
                                start (I promise!).
                            </p>
                            <p>Interested in finding out more about my life story or professional experience? Have a closer look at my resume or get in touch through my contact details just below!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <GoToTop/>
        </>
    )
}

export default About;