import React from 'react';
import Timeline from './_components/Timeline';
import Testimonials from './_components/Testimonial';
import AboutHeroSection from './_components/AboutHero';

const page = () => {
    return (
        <div>
            <AboutHeroSection/>
            <Timeline />
            <Testimonials />
        </div>
    );
};

export default page;