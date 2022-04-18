import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googlelogo from '../../../images/social-share/google.png'

const SocialShare = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    return (
        <div className='mt-4'>
            <div className=''>
                <button onClick={handleGoogleLogin} className='d-block mx-auto w-50 btn btn-info fw-bold'>
                    <img src={googlelogo} height="28px" alt="" />
                    <span className='ms-2 text-white'>Google Sign In</span></button>
                <p className='text-danger mt-2'>{error?.message}</p>
            </div>
        </div>
    );
};

export default SocialShare;