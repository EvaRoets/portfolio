import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from "react-bootstrap";


const Footer = () => {
    const name = "Eva Roets"
    return (
        <>

            <Container fluid="lg" className="footer sticky">
                <Row className="justify-content-sm-center-center">
                    <Col md={{span: 8, offset: 2}}>
                        Copyright
                        <FontAwesomeIcon icon={['far', 'copyright']}/>
                        <script>document.write(new Date().getFullYear())</script>
                        {name}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;






