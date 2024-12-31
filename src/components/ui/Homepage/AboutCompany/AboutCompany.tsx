'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Box, Container, Typography, } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Image from 'next/image'
import about from '../../../.../../../../src/assets/image/team/about.jpg'
import about2 from '../../../.../../../../src/assets/image/team/about2.jpg'
export default function AboutCompany() {
    const statsRef = useRef(null)
    const textRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        // Animate the main content
        gsap.from(textRef.current, {
            duration: 1,
            y: 30,
            opacity: 1,
            ease: 'power3.out'
        })

        // Animate the image
        gsap.from(imageRef.current, {
            duration: 1.2,
            x: -50,
            opacity: 1,
            ease: 'power3.out',
            delay: 0.3
        })

        // Animate statistics with counting effect
        const stats = statsRef.current?.querySelectorAll('.stat-number')
        stats?.forEach((stat: HTMLElement) => {
            const value = stat.getAttribute('data-value')
            gsap.from(stat, {
                textContent: 0,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                stagger: {
                    each: 0.2
                },
                delay: 0.5
            })
        })
    }, [])

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ display: 'flex', bg: 'red', gap: 6, alignItems: 'center' }}>
                <Box
                    ref={imageRef}
                    sx={{
                        position: 'relative',
                        flex: '0 0 45%'
                    }}
                >
                    <Image
                        src={about}
                        alt="Insurance Professional"
                        width={600}
                        height={800}
                        className="rounded-lg shadow-lg"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            left: -80,
                            bottom: 40,
                            width: 200,
                            height: 200,
                        }}
                    >
                        <Image
                            src={about2}
                            alt="Insurance Consultation"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-md"
                        />
                    </Box>
                </Box>

                <Box ref={textRef} sx={{ flex: 1 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            mb: 1,
                            display: 'block'
                        }}
                    >
                        Get Introduction
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            color: 'primary.dark',
                            fontWeight: 700,
                            mb: 3,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            lineHeight: 1.2
                        }}
                    >
                        Welcome To Our Insurance Company
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.main',
                            mb: 4,
                            fontSize: '1.1rem',
                            lineHeight: 1.7
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                        {[
                            'Suspe ndisse suscipit sagittis leo.',
                            'Entum estibulum dignissim posuere.',
                            'Lorem ipsum gene on the tend to repeat.'
                        ].map((text, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <CheckCircleIcon sx={{ color: 'primary.main', mr: 1 }} />
                                <Typography variant="body1" sx={{ color: 'text.main' }}>
                                    {text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box
                        ref={statsRef}
                        sx={{
                            display: 'flex',
                            gap: 4,
                            bgcolor: 'primary.50',
                            p: 4,
                            borderRadius: 2
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h3"
                                className="stat-number"
                                data-value="780"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    mb: 1
                                }}
                            >
                                780+
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Life Insurance
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h3"
                                className="stat-number"
                                data-value="990"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    mb: 1
                                }}
                            >
                                990+
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Happy Customers
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

