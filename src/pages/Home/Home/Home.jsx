import React from 'react';
import NavigationBar from '../Navbar/NavigationBar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Expertise from '../Expertise/Expertise';
import Success from '../Success/Success';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Hero />
            <About />
            <Expertise />
            <Success />
            <Contact />
        </>
    );
};

export default Home;