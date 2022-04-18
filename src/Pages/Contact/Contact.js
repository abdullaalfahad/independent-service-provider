import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div id='contact' className='container mb-5'>
            <h1 className='text-center mb-4'>Contact Me</h1>
            <Row className='g-4'>
                <Col lg="4" md="6" xs="12" className=''>
                    <Card className='border border-success contact-single py-5 px-4'>
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                                Do not want to about me? Here you can know about me and my future goals and working process.
                            </Card.Text>
                            <button onClick={() => navigate('/about')} className='btn btn-outline-success rounded-pill mt-5 w-100 d-block'>Visit About Pages</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" xs="12" className=''>
                    <Card className='border border-info contact-single py-5 px-4'>
                        <Card.Body>
                            <Card.Title>Blogs</Card.Title>
                            <Card.Text>
                                Are you interested in latest news working on a blogs story and need to get in touch?
                            </Card.Text>
                            <button onClick={() => navigate('/blogs')} className='btn btn-outline-info rounded-pill mt-5 w-100 d-block'>Visit Blogs Page</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" xs="12" className=''>
                    <Card className='border border-warning contact-single py-5 px-4'>
                        <Card.Body>
                            <Card.Title>Social Connect</Card.Title>
                            <Card.Text>
                                Do you want to find me on social media? I will help to go my social media link.
                            </Card.Text>
                            <a className='btn btn-outline-warning rounded-pill mt-5 w-100 d-block' href="https://linktr.ee/abdullaalfahad" target='blank'>Visit Social Media</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;