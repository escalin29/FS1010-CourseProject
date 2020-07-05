import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return (
        <footer className = "mt-5 footer fixed-bottom bg-dark ">
            <Container fluid = { true }>
                <Row className = "border-top justify-content-center p-3">
                    <Col className = "p-0 d-flex justify-content-center text-white" md = {3}>
                        Copyright &copy; E2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;