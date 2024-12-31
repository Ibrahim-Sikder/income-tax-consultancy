'use client'

import { Box, Typography, Container, Avatar } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import 'swiper/css'
import 'swiper/css/navigation'

interface Testimonial {
    id: number
    quote: string
    name: string
    position: string
    image: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "We also bring a strong interest in coaching and capability building, with an emphasis on emotional.",
        name: "Kathleen Smith",
        position: "Senior Director",
        image: "/placeholder.svg?height=80&width=80"
    },
    {
        id: 2,
        quote: "I love that moment when we find the connections between organisations and envisage the initiative or platform.",
        name: "Van Hunter",
        position: "Senior Director",
        image: "/placeholder.svg?height=80&width=80"
    },
    {
        id: 3,
        quote: "He was great in planting the seed and allowing the group to transition into a collaborative discussion pertaining.",
        name: "Macquarie Telecom",
        position: "Leadership Group",
        image: "/placeholder.svg?height=80&width=80"
    },
    {
        id: 3,
        quote: "He was great in planting the seed and allowing the group to transition into a collaborative discussion pertaining.",
        name: "Macquarie Telecom",
        position: "Leadership Group",
        image: "/placeholder.svg?height=80&width=80"
    },
    {
        id: 3,
        quote: "He was great in planting the seed and allowing the group to transition into a collaborative discussion pertaining.",
        name: "Macquarie Telecom",
        position: "Leadership Group",
        image: "/placeholder.svg?height=80&width=80"
    },
]

export default function Testimonials() {
    return (
        <Box
            sx={{
                bgcolor: '#f5f7fa',
                py: { xs: 8, md: 12 },
                position: 'relative'
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, maxWidth: '600px' }}>
                    <Box
                        sx={{
                            width: 40,
                            height: 2,
                            bgcolor: '#ff5722',
                            mb: 2
                        }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 700,
                            color: '#1a1a1a',
                            lineHeight: 1.2
                        }}
                    >
                        We have many reviews from
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 700,
                            color: '#1a1a1a',
                            lineHeight: 1.2
                        }}
                    >
                        our satisfied clients.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        '.swiper': {
                            px: { xs: 4, md: 6 },
                            py: 4
                        },
                        '.swiper-button-prev, .swiper-button-next': {
                            width: '48px',
                            height: '48px',
                            bgcolor: 'white',
                            borderRadius: '50%',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            '&::after': {
                                display: 'none'
                            },
                            '&.swiper-button-disabled': {
                                opacity: 0.5
                            }
                        },
                        '.swiper-button-prev': {
                            left: { xs: 0, md: 0 }
                        },
                        '.swiper-button-next': {
                            right: { xs: 0, md: 0 }
                        }
                    }}
                >
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next'
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        speed={1500}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <Box
                                    sx={{
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        p: 4,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 24,
                                            left: 24,
                                            fontSize: '4rem',
                                            color: '#f5f7fa',
                                            fontFamily: 'Georgia, serif',
                                            lineHeight: 1
                                        }}
                                    >
                                    
                                    </Box>
                                    <Typography
                                        sx={{
                                            mb: 4,
                                            color: '#666',
                                            lineHeight: 1.6,
                                            position: 'relative',
                                            zIndex: 1
                                        }}
                                    >
                                        {testimonial.quote}
                                    </Typography>
                                    <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{ width: 56, height: 56, mr: 2 }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: '#1a1a1a'
                                                }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#666'
                                                }}
                                            >
                                                {testimonial.position}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                        <Box className="swiper-button-prev">
                            <ChevronLeft sx={{ color: '#1a1a1a' }} />
                        </Box>
                        <Box className="swiper-button-next">
                            <ChevronRight sx={{ color: '#1a1a1a' }} />
                        </Box>
                    </Swiper>
                </Box>
            </Container>
        </Box>
    )
}

