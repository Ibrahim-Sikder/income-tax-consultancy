"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import quote from "../../../../../src/assets/image/feedback/quote_left_3.svg";
import feedback from "../../../../../src/assets/image/feedback/human.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const FeedbackCard: React.FC = () => {
    const feedbackData = [
        {
            "_id": "1",
            "name": "John Doe",
            "designation": "Software Engineer",
            "image": feedback,
            "message": "This service exceeded my expectations. Highly recommended!",
            "createdAt": "2023-11-01T10:15:30Z",
            "updatedAt": "2023-11-02T12:20:45Z"
        },
        {
            "_id": "2",
            "name": "Jane Smith",
            "designation": "Marketing Manager",
            "image": feedback,
            "message": "An exceptional experience from start to finish.",
            "createdAt": "2023-11-05T08:45:00Z",
            "updatedAt": "2023-11-06T14:30:15Z"
        },
        {
            "_id": "3",
            "name": "Alex Johnson",
            "designation": "Product Designer",
            "image": feedback,
            "message": "Truly outstanding service. I will definitely use it again.",
            "createdAt": "2023-11-10T09:30:00Z",
            "updatedAt": "2023-11-11T11:50:25Z"
        }
    ]


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="feedbackSwiper relative"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {feedbackData.map((testimonial) => (
                    <SwiperSlide
                    key={testimonial._id}
                    className="bg-white p-10 relative border  "
                  >
                    <div className="absolute -top-12 left-6">
                      <div className="relative w-28 h-28 border-8 border-[#080E1C]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex absolute top-20 left-44">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#44C7F4]" />
                        ))}
                      </div>
        
                      <Image
                        src={quote}
                        alt="quote"
                        className="absolute top-20 right-9 bg-[#44C7F4] text-white text-sm font-semibold w-10 h-10 p-2 rounded-full flex items-center justify-center"
                      />
                    </div>
                    <div className="mt-20 text-center">
                      <p className="text-gray-500 mb-4">{testimonial.message}</p>
                      <h3 className="font-bold text-lg text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">{testimonial.designation}</p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default FeedbackCard;
