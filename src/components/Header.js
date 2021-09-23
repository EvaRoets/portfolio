import React from "react";
import Logo from "../css/images/logos/favicon-32x32.png";


// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Navbar, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <>
            {/*navbar starts*/}
            <Container>
                <Navbar id="top" className="justify-content-center" bg="light" variant="light" sticky="top" expand="lg">
                        <Container>
                            <Navbar.Brand href="#top">
                                <img
                                    alt="Evelopment logo"
                                    src={Logo}
                                    className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>
                            <Nav.Item>
                                <Nav.Link href="#top">
                                    <FontAwesomeIcon icon="home"/>
                                    &nbsp;Home
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#my-projects">
                                    <FontAwesomeIcon icon="code"/>
                                    &nbsp;Projects
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#my-skills">
                                    <FontAwesomeIcon icon="cogs"/>
                                    &nbsp;Skills
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#about-me">
                                    <FontAwesomeIcon icon={['far', 'user']}/>
                                    &nbsp;About me
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#contact">
                                    <FontAwesomeIcon icon={['far', 'address-card']}/>
                                    &nbsp;Contact
                                </Nav.Link>
                            </Nav.Item>
                        </Container>
                </Navbar>
            </Container>

            {/*navbar ends*/}
        </>
    );
}

export default Header;