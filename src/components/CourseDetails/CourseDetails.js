import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const CourseDetails = ({ courses }) => {
    const { id } = useParams()
    const course = courses?.find(cs=>cs.id === id)
    return (
        <Container style={{marginTop: "100px"}}  >
            {
                    <Row>
                        <Col md={6}>
                            <Image src={course?.img} fluid></Image>
                        </Col>
                        <Col md={6} className="text-secondary">
                        <h4>Name: {course?.name}</h4>
                        <h4>Course Free: {course?.price}</h4>
                        <h4>Course Status: {course?.status}</h4>
                        <h4>Course Duration: {course?.duration}</h4>
                        </Col>
                    </Row>
            }
        </Container>
    );
};

export default CourseDetails;