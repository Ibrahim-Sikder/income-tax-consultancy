"use client";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import icon from "../../../../../src/assets/image/icon/title_shape.svg";
import tax from "../../../../../src/assets/image/icon/tax-consultant.png";
import tax2 from "../../../../../src/assets/image/icon/taxes.png";
import Container from "@/components/Share/Container/Container";
import service from '../../../../../src/assets/image/services/conversion.png'


const servicesData = [
    {
        _id: 1,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, ',
        name: 'Tax Consultancy',
        image: service
    },
    {
        _id: 1,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, ',
        name: 'Tax Consultancy',
        image: tax
    },
    {
        _id: 1,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, ',
        name: 'Tax Consultancy',
        image: tax2
    },
]

const ServiceCard = () => {

    return (
        <Container>
            <div className="">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Image src={icon} alt="icon" width={24} height={24} />
                        <span className="text-[#44C7F4] font-semibold uppercase tracking-widest">
                            A Trusted Tax Consultancy Solution
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mt-2 leading-tight">
                        We Provide
                        <span className="text-[#44C7F4]"> Exclusive Service</span>
                    </h2>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper relative"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {servicesData.map((service, index) => (
                        <SwiperSlide key={service._id} className="pt-20">
                            <div className="relative transition-transform transform hover:scale-105 duration-300">
                                <div className="absolute left-1/2 -top-16 -translate-x-1/2 z-10">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#2E58A2] to-[#44C7F4] p-1">
                                        <div className="w-full h-full rounded-full bg-white p-2">
                                            <Image
                                                src={service.image}
                                                alt={service.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-lg text-center p-8 pt-20 relative rounded-lg">
                                    <div className="absolute top-4 right-4 text-6xl font-bold text-[#DEEEFF] opacity-50">
                                        {`0${index + 1}`}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                                    <p className="text-gray-600 mb-6">
                                        {service.description.length > 80
                                            ? `${service.description.slice(0, 80)}...`
                                            : service.description}
                                    </p>
                                    <Link href='/'>
                                        <button className="w-full py-2 bg-gradient-to-r from-[#2E58A2] to-[#44C7F4] text-white rounded-lg font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300">
                                            <span>See Details</span>
                                            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default ServiceCard;
