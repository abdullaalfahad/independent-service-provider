import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialShare from '../../Shared/SocialShare/SocialShare';
import Loading from '../../Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{error?.message}</p>

                <Button className='fw-bold text-white' variant="info" type="submit">
                    Register
                </Button>
            </Form>

            <p className='mt-3'>Already have an account? <Link to="/login">Please login</Link></p>
            <SocialShare></SocialShare>
        </div>


    );
};

export default Register;