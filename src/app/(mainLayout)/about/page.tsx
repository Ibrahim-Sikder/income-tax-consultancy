import React from 'react';
import Timeline from './_components/Timeline';
import Testimonials from './_components/Testimonial';
import AboutHeroSection from './_components/AboutHero';
import AboutService from './_components/AboutService';
import CommonBanner from '@/components/Share/CommonBanner';
import about from '../../../../src/assets/image/about/about.jpg'
const page = () => {
    return (
        <div>
            <CommonBanner backgroundImage={about} title='About Us' />
            <AboutHeroSection />
            <AboutService />
            <Timeline />
            <Testimonials />
        </div>
    );
};

export default page;