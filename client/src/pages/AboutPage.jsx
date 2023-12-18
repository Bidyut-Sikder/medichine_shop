import React from 'react';
import HomePage from './HomePage';
import FrontPage from './FrontPage';
import About from '../components/About';

const AboutPage = () => {
    return (
        <div>
            <FrontPage page={<About />} />
        </div>
    );
};

export default AboutPage;