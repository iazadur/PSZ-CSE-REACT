import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Course = ({courses,len}) => {
    

    let homeCourses = []
    if (len) {
        homeCourses = courses.filter(cs => cs.id <= len)
    } else {
        homeCourses = courses
    }
    
    return (
        <Container>
            <div className="services my-5">
                <div className="text-start">
                    <h1 className="fontsize fw-bolder">Find The Right <br /> Online Course For You</h1>
                    <p className="text-muted">You don't have to struggle alone, you've got our assistance and help.</p>
                </div>
                <Row xs={1} md={4} lg={4} className="g-4">
                   
                    {homeCourses.map((course, i) => (

                        <Col>
                            <Card>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <p><FontAwesomeIcon icon={faClock} /> {course.duration}</p>
                                        <p><FontAwesomeIcon icon={faStar} /> {course.rating}</p>
                                    </div>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        {course.name} from beginner to advanced
                                    </Card.Text>
                                </Card.Body>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <h4 className="fw-bloder fs-4" style={{ color: `${course.color}` }}>${course.price}</h4>
                                    <p className="fs-5 fw-normal">view details</p>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default Course;