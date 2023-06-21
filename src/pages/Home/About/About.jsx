import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div id='about' className='bg-primary'>
            <Container>
                <div className='p-5'>
                    <h2 className='text-white fw-bold fs-1'>About Us</h2>
                    <p className='text-white fs-4 mt-3'>With over 3 years of experience, we at incubyte specialize in setting up captive development centers for growing starups, addressing key challenges and providing tailor-made solutions for your buisness needs.</p>
                </div>
            </Container>
        </div>
    );
};

export default About;