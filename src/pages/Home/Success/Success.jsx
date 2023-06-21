import React from 'react';
import EllipseImg from '../../../assets/hero/Ellipse2.png'
import { Container } from 'react-bootstrap';

const Success = () => {
    return (
        <div className='bg-primary-subtle position-relative p-5'>

            <Container>
                <div id='stories'>
                    <div className='text-center'>
                        <h2 className='fw-bold'>Success Stories</h2>
                        <p className='mt-3'>Saving Millions and Building Trust: The Power of Regulatory Guidance" - This success story outlines how a company utilized regulatory guidance to identify and rectify potential compliance issues. By proactively addressing regulatory requirements, they not only saved significant costs but also strengthened their reputation, resulting in increased customer loyalty and industry recognition.</p>
                    </div>
                </div>
            </Container>

            <img className='position-absolute top-0 start-50 translate-middle-x' src={EllipseImg} alt="" />
        </div>
    );
};

export default Success;