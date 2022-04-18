import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialShare from '../../Shared/SocialShare/SocialShare';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate('/');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error?.message || error1?.message}</p>
                <Button className='fw-bold text-white' variant="info" type="submit">
                    Login
                </Button>
            </Form>
            <div>
                <p className='mt-3'>Forget Password?<button onClick={resetPassword} className='btn btn-link mb-1'>Reset Password</button></p>
            </div>
            <p className='mt-3'>New to Pure Doctor? <Link to="/register">Register here</Link></p>
            <SocialShare></SocialShare>
            <ToastContainer />
        </div>
    );
};

export default Login;