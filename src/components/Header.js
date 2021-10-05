// TODO: make pencil logo draw a line when hovering

import React from "react";
import Logo from "../css/images/logos/favicon.png";

// import Bootstrap elements
import {Container, Navbar, Nav} from "react-bootstrap";

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <Container>
                <Navbar id="top" className="justify-content-center" bg="muted"  sticky="top" expand="lg">
                    <Container>
                        <Navbar.Brand href="#top">
                            <img
                                alt="Evelopment logo"
                                src={Logo}
                                className="d-inline-block align-top"

                            />
                            {/*{'Evelopment'}*/}
                        </Navbar.Brand>
                        <Nav.Item>
                            <Nav.Link href="#projects" >
                                <FontAwesomeIcon icon="code"/>
                                &nbsp;Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#skills">
                                <FontAwesomeIcon icon="cogs"/>
                                &nbsp;Skills
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#about">
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
        </>
    );
}

export default Header;

