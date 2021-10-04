import React, { useEffect, useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
    const [question, setQues] = useState([])
    useEffect(() => {
        fetch('/faq.json')
            .then(res => res.json())
            .then(data => setQues(data))
    }, [])
    return (
        <Container style={{ marginTop: "100px", height: "50vh" }} className="mb-5">
            <h1 className="mb-5 fw-blod text-center">Common Question About DUET Admission</h1>

            <Accordion defaultActiveKey="0" >

                {
                    question.map((q) =>
                        <Accordion.Item eventKey={q.id}>
                            <Accordion.Header key={q.id}>{q.ques}</Accordion.Header>
                            <Accordion.Body>
                                {q.ans}
                            </Accordion.Body>
                        </Accordion.Item>

                    )
                }
            </Accordion>
        </Container>
    );
};

export default Faq;