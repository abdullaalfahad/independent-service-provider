import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='fw-bold text-white' variant="info" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'>New to Pure Doctor? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default Login;