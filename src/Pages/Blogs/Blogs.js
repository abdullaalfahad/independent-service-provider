import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='mb-4 border p-4 blog'>
                <h4>Q1. Difference between authorization and authentication?</h4>
                <p>Answer: 1. In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person's or user's authorities are checked for accessing the resources. 2. In authentication process, users or persons are verified. While in authorization process, users or persons are validated. 3. Authentication determines whether the person is user or not. While authorization determines What permission do user have? 4. Authentication needs usually user's login details. While authorization needs user's privilege or security levels.</p>
            </div>
            <div className='mb-4 border p-4 blog'>
                <h4>Q2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p><span className='d-block'>
                    Answer: All data in the database is managed by Firebase in real time. As a result, data is easily and quickly transferred to and from the database. As a result, you may utilize Firebase to create web apps that include login, registration, live streaming, chat messaging, and so on.
                </span>
                    <span>
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through Cookie-Based authentication, Token-Based authentication, Third party access(OAuth, API-token), OpenId, SAML.
                    </span>

                </p>
            </div>
            <div className='mb-4 border p-4 blog'>
                <h4>Q3. What other services does firebase provide other than authentication?</h4>
                <p>Answer: There are many services which Firebase provides except authentication, Most useful of them are:
                    <ul className='mt-2'>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>
                </p>
            </div>
        </div >
    );
};

export default Blogs;