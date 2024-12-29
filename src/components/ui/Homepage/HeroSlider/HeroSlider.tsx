'use client'

import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import gsap from 'gsap'
import { Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import Image from 'next/image'
import slider from '../../../../../src/assets/image/slider/bg-slider1.jpg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

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
  const swiperRef = useRef<any>(null)

  const animateSlideContent = (elements: HTMLElement[]) => {
    // Clear any existing animations
    gsap.set(elements, { clearProps: 'all' })

    // Create a timeline for smoother sequencing
    const tl = gsap.timeline()

    // Animate subtitle
    tl.fromTo(
      elements[0],
      {
        y: 50,
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
    tl.fromTo(
      titleChars,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
      },
      '-=0.4'
    )

    // Animate description
    tl.fromTo(
      elements[2],
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )

    // Animate button
    tl.fromTo(
      elements[3],
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6'
    )

    // Animate background zoom
    const bgImage = document.querySelector('.swiper-slide-active .slide-bg') as HTMLElement
    if (bgImage) {
      gsap.fromTo(
        bgImage,
        { scale: 1.2 },
        {
          scale: 1,
          duration: 2.5,
          ease: 'power2.out',
        }
      )
    }
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
        span.textContent = char === ' ' ? '\u00A0' : char
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
    <div className="relative h-[800px] w-full overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop
        onSlideChange={handleSlideChange}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Zoom Effect */}
              <div className="slide-bg absolute inset-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
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

