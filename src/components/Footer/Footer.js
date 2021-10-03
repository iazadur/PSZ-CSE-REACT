import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>

                <Row>
                    <Col sm>
                        <Stack direction="horizontal" gap={3}>
                            <div className="bg-light border">First item</div>
                            <div className="bg-light border">Second item</div>
                            <div className="bg-light border">Third item</div>
                        </Stack>
                    </Col>
                    <Col sm>
                        <Stack gap={3}>
                            <div className="bg-light border">First item</div>
                            <div className="bg-light border">Second item</div>
                            <div className="bg-light border">Third item</div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;