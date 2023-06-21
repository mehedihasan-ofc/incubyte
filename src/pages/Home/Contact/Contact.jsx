import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div id='contact' className='bg-info-subtle'>
            <Container>
                <div className='text-center p-5'>
                    <h2 className='fw-bold'>Ready to Scale Up?</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quibusdam ratione id cumque aperiam, corporis iure veniam.</p>
                    <button className='btn btn-primary'>Contact Us</button>
                </div>
            </Container>
        </div>
    );
};

export default Contact;