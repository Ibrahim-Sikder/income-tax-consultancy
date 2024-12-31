'use client'

import React, { useEffect, useRef } from "react";
import { Box, Typography, Card } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import { gsap } from "gsap";

const BlogSection = () => {
    const hoverRefs = useRef([]);

    useEffect(() => {
        hoverRefs.current.forEach((ref) => {
            if (ref) {
                gsap.fromTo(
                    ref.querySelector(".details"),
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        paused: true,
                        ease: "power2.out",
                        onReverseComplete: () => (ref.querySelector(".details").style.display = "none"),
                    }
                );
            }
        });
    }, []);

    const handleHover = (index: number, isHover: boolean) => {
        const tl = gsap.timeline();
        const detailsElement = hoverRefs.current[index]?.querySelector(".details");
        if (detailsElement) {
            detailsElement.style.display = isHover ? "block" : "none";
            isHover ? tl.play() : tl.reverse();
        }
    };

    const newsData = [
        {
            title: "Reasons to explain fast business builder.",
            date: "November 5, 2019",
            author: "Admin",
            image: "https://via.placeholder.com/400x300",
        },
        {
            title: "Blackpool polices hunt for David Schwimmer",
            date: "November 4, 2018",
            author: "Admin",
            image: "https://via.placeholder.com/400x300",
        },
        {
            title: "How Stay Calm from the First Time.",
            date: "November 5, 2019",
            author: "Admin",
            image: "https://via.placeholder.com/400x300",
        },
        {
            title: "How Stay Calm from the First Time.",
            date: "November 5, 2019",
            author: "Admin",
            image: "https://via.placeholder.com/400x300",
        },
        {
            title: "How Stay Calm from the First Time.",
            date: "November 5, 2019",
            author: "Admin",
            image: "https://via.placeholder.com/400x300",
        },
        {
            title: "How Stay Calm from the First Time.",
            date: "November 5, 2019",
            author: "Admin",
            image: "https://via.placeholder.com/400x300",
        },
    ];

    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: 8, px: 2 }}>
            <Typography variant="h6" align="center" sx={{ color: "#00f" }}>
                LATEST NEWS
            </Typography>
            <Typography variant="h3" align="center" fontWeight="bold">
                We’re ready to share our advice and experience.
            </Typography>
            <Typography align="center" sx={{ mt: 2, mb: 4 }}>
                Like what you see? Contact us to see what type of solutions we can deploy for your business!
            </Typography>

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                style={{ padding: "0 20px" }}
            >
                {newsData.map((news, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            ref={(el) => (hoverRefs.current[index] = el)}
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                "&:hover .details": { display: "block" },
                                "&:hover img": { transform: "scale(1.1)" },
                            }}
                            onMouseEnter={() => handleHover(index, true)}
                            onMouseLeave={() => handleHover(index, false)}
                        >
                            <Box
                                component="img"
                                src={news.image}
                                alt={news.title}
                                sx={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "cover",
                                    transition: "transform 0.5s ease",
                                }}
                            />
                            <Box
                                className="details"
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    bgcolor: "rgba(0, 0, 0, 0.7)",
                                    color: "#fff",
                                    padding: 2,
                                    display: "none",
                                    zIndex: 1,
                                }}
                            >
                                <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <span role="img" aria-label="calendar">
                                        📅
                                    </span>
                                    {news.date} | {news.author}
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 1 }}>
                                    {news.title}
                                </Typography>
                            </Box>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default BlogSection;
