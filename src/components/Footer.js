import React from "react";

// import Bootstrap elements
import {Container, Row, Col} from "react-bootstrap";

// import fontawesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    const name = "Eva Roets"
    return (
        <>
            <Container fluid="lg" className="footer-container sticky">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 8, offset: 2}} className="text-center">
                        Copyright
                        <FontAwesomeIcon icon={['far', 'copyright']}/> &nbsp;
                        <script>document.write(new Date().getFullYear())</script>
                        {name}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;






