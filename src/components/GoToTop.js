import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from "react-bootstrap";

const GoToTop = () => {
    return (
        <>
            <Container className="go-to-top" fluid="lg">
                <Row>
                    <Col md={{span: 8, offset: 2}} className="text-center">
                        <a href="#top" id="top">
                            <FontAwesomeIcon icon="chevron-circle-up"/>
                            &nbsp; &nbsp;Let's go back to the top
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GoToTop;