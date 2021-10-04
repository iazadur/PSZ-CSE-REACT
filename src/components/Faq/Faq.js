// import React, { useEffect, useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
    // const [ques, setQues] = useState([])
    // useEffect(() => {
    //     fetch('/Faq.json')
    //         .then(res => res.json())
    //     .then(data=>setQues(data))
    // },[])
    return (
        <Container style={{ marginTop: "100px" }}>
            <h1>Common Question About DUET Admission</h1>
            <Accordion defaultActiveKey="0">
                {/* {
                    quess.map((q,i) => 
                        <Accordion.Item eventKey={i}>
                        <Accordion.Header>{q.ques}</Accordion.Header>
                        <Accordion.Body>
                            {q.ans}
                        </Accordion.Body>
                    </Accordion.Item>
                    )
                } */}

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Faq;