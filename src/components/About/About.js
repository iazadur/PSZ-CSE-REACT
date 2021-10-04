import { faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{ marginTop: "100px" }}>
            <div className="fw-normal text-muted mx-auto w-50  py-5  ">
            <p>All of polytechnic students are benefited from this page. Because, lot of note and video class are provide here.In particular, Computer Department student are more benefited because Private Study Zone is a DUET Admission Coaching only for CSE
                </p>
                <b><FontAwesomeIcon className="fs-6" icon={faMailBulk} />  engg.asmaul@gmail.com</b>\
                <p><FontAwesomeIcon className="fs-6" icon={faPhoneAlt} /> <b>+8801719737799</b></p>
            </div>
            
        </Container>
    );
};

export default About;