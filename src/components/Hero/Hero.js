import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import hero from "../../logo.png"
import './Hero.css'

const Hero = () => {
    return (
        <>
            <Container style={{ marginTop:'100px'}}>
                <div className="hero my-5">
                    <Row>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center hero-text" >
                            <div className='text-area'>
                                <h6 className="fs-5 text-primary fw-bold">Why Choses Me</h6>
                                <h1 className="fw-bolder fontsize text-black">Tools For Teachers And Learners</h1>
                                <p className="text-muted">Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.</p>
                                <button className="btn hero-btn py-2 px-5 text-white fw-bolder text-uppercase">join for us</button>
                                <button className="btn  py-2 px-5 ms-2 text-black fw-normal text-uppercase">learn more</button>

                            </div>
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            <Image className="hero-img" src={hero} fluid  />
                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    );
};

export default Hero;