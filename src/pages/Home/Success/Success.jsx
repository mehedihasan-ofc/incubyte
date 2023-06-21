import React from 'react';
import EllipseImg from '../../../assets/hero/Ellipse2.png'
import { Container } from 'react-bootstrap';

const Success = () => {
    return (
        <div className='bg-primary-subtle position-relative p-5'>

            <Container>
                <div>
                    <div className='text-center'>
                        <h2 className='fw-bold'>Success Stories</h2>
                        <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fugiat odit corporis eaque dolorum illum quaerat maiores illo aliquid, quasi porro dolores veniam explicabo beatae quos necessitatibus. Amet non culpa reiciendis nulla, eos dolorum cupiditate molestiae explicabo nesciunt possimus, quas, consequatur necessitatibus animi illum facilis! Eaque quasi numquam velit consequatur.</p>
                    </div>
                </div>
            </Container>

            <img className='position-absolute top-0 start-50 translate-middle-x' src={EllipseImg} alt="" />
        </div>
    );
};

export default Success;