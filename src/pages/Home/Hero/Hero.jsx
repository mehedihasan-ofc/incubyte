import React from 'react';
import heroImg from '../../../assets/hero/hero-img.png';
import Ellipse1 from '../../../assets/hero/Ellipse1.png';
import Ellipse2 from '../../../assets/hero/Ellipse2.png';
import Ellipse3 from '../../../assets/hero/Ellipse3.png';

const Hero = () => {
    return (
        <div id='home' className='bg-primary-subtle position-relative vh-100'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-center'>
                    <h1 className='fw-bold'>Welcome to <span className='text-primary'>Incubyte</span></h1>
                    <p className='lead'>Building bridges to success in the tech ecosystem</p>
                    <img className='w-75 img-fluid' src={heroImg} alt="" />
                </div>
            </div>

            <img className='position-absolute top-50 end-0 translate-middle-y h-75' src={Ellipse1} alt="" />
            <img className='position-absolute top-0 start-0 w-25' src={Ellipse2} alt="" />
            <img className='position-absolute top-100 start-0 translate-middle h-75' src={Ellipse3} alt="" />
        </div>
    );
};

export default Hero;