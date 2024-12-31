'use client'

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules'
import team from '../../../../../src/assets/image/team/team.jpg'
import team2 from '../../../../../src/assets/image/team/team2.jpg'
import team3 from '../../../../../src/assets/image/team/team3.jpg'
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Box,
    Container,
    Stack,
} from '@mui/material'
import {
    Share as ShareIcon,
    Facebook as FacebookIcon,
    LinkedIn as LinkedInIcon,
    Instagram as InstagramIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import gsap from 'gsap'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'

const teamMembers = [
    {
        id: 1,
        name: 'Donald John',
        role: 'Executive Manager',
        image: team,
    },
    {
        id: 2,
        name: 'Iven Rocky',
        role: 'Web Developer',
        image: team2,
    },
    {
        id: 3,
        name: 'Laito French',
        role: 'Founder & CEO',
        image: team3,
    },
    {
        id: 4,
        name: 'Adam Ivan',
        role: 'Chief Advisor',
        image: team,
    },
    {
        id: 4,
        name: 'Adam Ivan',
        role: 'Chief Advisor',
        image: team2,
    },
    {
        id: 4,
        name: 'Adam Ivan',
        role: 'Chief Advisor',
        image: team3,
    },
    {
        id: 4,
        name: 'Adam Ivan',
        role: 'Chief Advisor',
        image: team2,
    },
]

const socialIcons = [
    { icon: <FacebookIcon />, color: '#1877F2' },
    { icon: <LinkedInIcon />, color: '#0A66C2' },
    { icon: <InstagramIcon />, color: '#E4405F' },
]

export default function TeamSlider() {
    const [activeShare, setActiveShare] = useState<number | null>(null)
    const socialIconsRef = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        if (activeShare !== null) {
            gsap.fromTo(
                socialIconsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: 'power2.out',
                }
            )
        }
    }, [activeShare])

    const handleShareClick = (memberId: number) => {
        if (activeShare === memberId) {
            gsap.to(socialIconsRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.2,
                stagger: 0.05,
                ease: 'power2.in',
                onComplete: () => setActiveShare(null),
            })
        } else {
            setActiveShare(memberId)
        }
    }

    return (
        <Box sx={{
            py: 8, marginTop: '280px',
            background: `linear-gradient(135deg, #092A49 0%, #092A49 100%)`,
        }}>
            <Container maxWidth="lg" >
                <Stack spacing={2} alignItems="center" mb={6}>
                    <Typography
                        component="span"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                        }}
                    >
                        Team
                    </Typography>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 700,
                            color: '#fff',
                            mb: 2,

                        }}
                    >
                        Our expert team will help you.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="#fff"
                        sx={{ maxWidth: 600 }}
                    >
                        As a app web crawler expert, I help organizations adjust to the expanding
                        significance of internet promoting or lipsum.
                    </Typography>
                </Stack>

                <Box sx={{ position: 'relative', px: { xs: 4, md: 6 } }}>
                    <Swiper
                        modules={[Navigation, EffectCoverflow, Autoplay]}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        speed={1000}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {teamMembers.map((member) => (
                            <SwiperSlide key={member.id}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        overflow: 'visible',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            paddingTop: '100%',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ fontWeight: 600 }}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography variant="body2" color="primary">
                                            {member.role}
                                        </Typography>
                                        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                                            <IconButton
                                                size="small"
                                                onClick={() => handleShareClick(member.id)}
                                                sx={{
                                                    bgcolor: 'background.paper',
                                                    transition: 'transform 0.2s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                    },
                                                }}
                                            >
                                                <ShareIcon fontSize="small" />
                                            </IconButton>
                                            {activeShare === member.id && (
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        right: 0,
                                                        top: -48,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: 0.5,
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {socialIcons.map((social, index) => (
                                                        <IconButton
                                                            key={index}
                                                            size="small"
                                                            ref={(el) => (socialIconsRef.current[index] = el)}
                                                            sx={{
                                                                color: social.color,
                                                                bgcolor: 'background.paper',
                                                                '&:hover': {
                                                                    bgcolor: 'action.hover',
                                                                    transform: 'scale(1.1)',
                                                                },
                                                                transition: 'transform 0.2s ease',
                                                                opacity: 0,
                                                            }}
                                                        >
                                                            {social.icon}
                                                        </IconButton>
                                                    ))}
                                                </Box>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <IconButton
                        className="swiper-button-prev"
                        sx={{
                            position: 'absolute',
                            left: { xs: 0, md: 0 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            '&:hover': {
                                bgcolor: 'action.hover',
                                transform: 'translateY(-50%) scale(1.1)',
                            },
                            transition: 'transform 0.2s ease',
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton
                        className="swiper-button-next"
                        sx={{
                            position: 'absolute',
                            right: { xs: 0, md: 0 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            '&:hover': {
                                bgcolor: 'action.hover',
                                transform: 'translateY(-50%) scale(1.1)',
                            },
                            transition: 'transform 0.2s ease',
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
}

