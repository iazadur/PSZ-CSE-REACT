import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <div className="services my-5">
                <div className="text-center">
                    <h1 className="fontsize fw-bolder">Why An Scholercity Out <br /> Of The Ordinary</h1>
                    <p className="text-muted">You don't have to struggle alone, you've got our assistance and help.</p>
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {services.map((service,i) => (
                        <Col key={i} >
                            <Card style={{backgroundColor:`${service.color}`}} className="p-3">
                                <Card.Body className="text-white">
                                    <Card.Title>
                                        <FontAwesomeIcon className="fontsize" icon={faLayerGroup} />
                                    </Card.Title>
                                    <Card.Text>
                                        <h3 className="fw-bold">{service.name}</h3>
                                        <h5>
                                            ${service.price}
                                        </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default Services;