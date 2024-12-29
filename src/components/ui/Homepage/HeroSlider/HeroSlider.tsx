'use client'

import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import gsap from 'gsap'
import { Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import slider from '../../../../../src/assets/image/slider/bg-slider1 (1).jpg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
    {
        id: 1,
        subtitle: 'DISCOVER US TO BOOST BUSINESS',
        title: 'Our Commitment to Promote your Business.',
        description: 'We place you at the centre of international networks to boost your dream of business',
        buttonText: 'Our Team',
        image: slider,
    },
    {
        id: 2,
        subtitle: 'INNOVATIVE BUSINESS SOLUTIONS',
        title: 'Strategic Planning for Your Enterprise.',
        description: 'Transform your business with our expert consulting and innovative strategies',
        buttonText: 'Learn More',
        image: slider,
    },
    {
        id: 3,
        subtitle: 'EXCELLENCE IN CONSULTING',
        title: 'Building Success Together.',
        description: 'Partner with us to achieve sustainable growth and market leadership',
        buttonText: 'Get Started',
        image: slider,
    },
]

export function HeroSlider() {
    const timeoutRef = useRef<NodeJS.Timeout>()

    const animateSlideContent = (elements: HTMLElement[]) => {
        // Clear any existing animations
        gsap.set(elements, { clearProps: 'all' })

        // Animate subtitle
        gsap.fromTo(
            elements[0],
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
            }
        )

        // Animate title letters
        const titleChars = elements[1].querySelectorAll('.char')
        gsap.fromTo(
            titleChars,
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.02,
                ease: 'power3.out',
            }
        )

        // Animate description
        gsap.fromTo(
            elements[2],
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out',
            }
        )

        // Animate button
        gsap.fromTo(
            elements[3],
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.6,
                ease: 'power3.out',
            }
        )
    }

    const handleSlideChange = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            const activeSlide = document.querySelector('.swiper-slide-active')
            if (activeSlide) {
                const elements = [
                    activeSlide.querySelector('.subtitle'),
                    activeSlide.querySelector('.title'),
                    activeSlide.querySelector('.description'),
                    activeSlide.querySelector('.cta-button'),
                ] as HTMLElement[]
                animateSlideContent(elements)
            }
        }, 100)
    }

    useEffect(() => {
        // Split text into characters for animation
        const titles = document.querySelectorAll('.title')
        titles.forEach((title) => {
            const text = title.textContent || ''
            title.textContent = ''
            text.split('').forEach((char) => {
                const span = document.createElement('span')
                span.textContent = char
                span.className = 'char'
                title.appendChild(span)
            })
        })

        // Trigger initial animation
        handleSlideChange()

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <div className="relative h-[800px] w-full">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay]}
                className="mySwiper h-full "
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="absolute inset-0 bg-black/50" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                                <div className="max-w-2xl">
                                    <p className="subtitle mb-4 text-sm font-semibold tracking-wider text-blue-500">
                                        {slide.subtitle}
                                    </p>
                                    <h2 className="title mb-6 text-5xl font-bold leading-tight text-white">
                                        {slide.title}
                                    </h2>
                                    <p className="description mb-8 text-lg text-gray-200">
                                        {slide.description}
                                    </p>
                                    <Button
                                        variant="contained"
                                        className="cta-button"
                                        sx={{
                                            bgcolor: '#007bff',
                                            '&:hover': {
                                                bgcolor: '#0056b3',
                                            },
                                        }}
                                        endIcon={<ArrowForward />}
                                    >
                                        {slide.buttonText}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

