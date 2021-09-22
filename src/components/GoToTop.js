import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from "react-bootstrap";

const GoToTop = () => {
    return (
        <>
            <Container fluid="lg">
                <Row>
                    <Col md={{span: 8, offset: 2}} className="text-center">
                        <a href="#top" id="top">
                            <FontAwesomeIcon icon="chevron-circle-up"/>
                            Let's go back to the top
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GoToTop;