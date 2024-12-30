/* eslint-disable react/no-unescaped-entities */
'use client'

import { Box, Container, Typography, Grid, Link } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import Image from 'next/image'
import about from '../../../../../src/assets/image/about/about.png'
import signature from '../../../../../src/assets/image/about/signature.png'
export default function AboutHeroSection() {
    const features = [
        "Praesent feugiat sem mattis.",
        "A wonderful serenity.",
        "Premium services for you.",
        "Set a link back to photo."
    ]

    return (
        <Box sx={{ bgcolor: 'white', py: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        {/* Blue line accent */}
                        <Box
                            sx={{
                                width: 40,
                                height: 2,
                                bgcolor: '#007bff',
                                mb: 3
                            }}
                        />

                        {/* Main heading */}
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2rem', md: '3rem' },
                                fontWeight: 700,
                                lineHeight: 1.2,
                                mb: 3,
                                color: '#1a1a1a'
                            }}
                        >
                            We're a global stakeholder relations and partnership building consultancy.
                        </Typography>

                        {/* Description paragraphs */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#666',
                                mb: 2,
                                fontSize: '1.1rem',
                                lineHeight: 1.6
                            }}
                        >
                            Collaborate Consulting exists to find the place where to being seemingly disparate interests meet. From that point of the connection, we create platforms.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: '#666',
                                mb: 4,
                                fontSize: '1.1rem',
                                lineHeight: 1.6
                            }}
                        >
                            We bring more than 24 years' senior experience forging of collaborations across government.
                        </Typography>

                        {/* Features list */}
                        <Box sx={{ mb: 4 }}>
                            {features.map((feature, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2
                                    }}
                                >
                                    <ArrowForward
                                        sx={{
                                            mr: 1,
                                            color: '#007bff',
                                            fontSize: '1rem'
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#444',
                                            fontWeight: 500
                                        }}
                                    >
                                        {feature}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Contact section */}
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="body1"
                                sx={{ color: '#666' }}
                            >
                                Call to ask{' '}
                                <Link
                                    href="#"
                                    sx={{
                                        color: '#007bff',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    any question
                                </Link>
                                {' '}
                                <Typography
                                    component="span"
                                    sx={{
                                        color: '#1a1a1a',
                                        fontWeight: 600,
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    540-325-1523
                                </Typography>
                            </Typography>
                        </Box>

                        {/* Signature section */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={signature}
                                alt="Signature"
                                width={120}
                                height={60}
                                style={{
                                    objectFit: 'contain'
                                }}
                            />
                            <Box sx={{ ml: 2 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#1a1a1a',
                                        fontWeight: 600
                                    }}
                                >
                                    Natalia Duke
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#666' }}
                                >
                                    (Chairman and founder)
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Image section */}
                    <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                        {/* Dotted pattern */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '200px',
                                height: '200px',
                                backgroundImage: 'radial-gradient(#ddd 2px, transparent 2px)',
                                backgroundSize: '15px 15px',
                                zIndex: 1
                            }}
                        />

                        {/* Main image with badge */}
                        <Box sx={{ position: 'relative', mt: { xs: 4, md: 0 } }}>
                            <Image
                                src={about}
                                alt="Business consultant"
                                width={500}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '20px'
                                }}
                            />

                            {/* Blue circular badge */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '10%',
                                    right: '-5%',
                                    width: 120,
                                    height: 120,
                                    borderRadius: '50%',
                                    bgcolor: '#007bff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    p: 2,
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(0,123,255,0.3)',
                                    zIndex: 2
                                }}
                            >
                                <Box>
                                    <Image
                                        src="/placeholder.svg?height=40&width=40"
                                        alt="Trophy icon"
                                        width={40}
                                        height={40}
                                        style={{
                                            marginBottom: '8px'
                                        }}
                                    />
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            fontSize: '0.7rem',
                                            lineHeight: 1.2
                                        }}
                                    >
                                        High quality & customer support
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

