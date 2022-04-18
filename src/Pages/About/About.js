import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../images/about-me/abdullaalfahad.jpg'

const About = () => {
    return (
        <div className='container my-5'>
            <Card className='w-50 mx-auto'>
                <Card.Img className='' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Abdulla Al Fahad</Card.Title>
                    <Card.Text>
                        My goal is to create a software development company to increase job platform and help others. Where we will working on web apps, mobile apps and so on. It could be client based projects or our product development projects. That's why, first of all I need to increase my skills and I am always upgrade my skill with different technology.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;