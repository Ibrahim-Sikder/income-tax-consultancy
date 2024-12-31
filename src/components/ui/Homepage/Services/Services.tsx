"use client";

import ServiceCard from "./ServiceCard";


const Services = () => {
    return (
        <div className="relative py-24 bg-black">
            <div className="absolute inset-0 z-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServiceCard />
            </div>
        </div>
    );
};

export default Services;
