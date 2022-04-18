import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate();
    return (
        <Col lg="4" md="6" xs="12">
            <Card>
                <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price: {price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigate('/checkout')} variant="info" className='text-white w-100'>Proceed Checkout</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;