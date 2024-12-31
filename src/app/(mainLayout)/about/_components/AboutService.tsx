/* eslint-disable react/no-unescaped-entities */
'use client'

import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import Image from 'next/image'
import DownloadBruchure from './DownloadBruchure'

const services = [
    {
        title: 'Counsel Services',
        image: '/placeholder.svg?height=300&width=400'
    },
    {
        title: 'Securitization Law',
        image: '/placeholder.svg?height=300&width=400'
    },
    {
        title: 'Commertial Law',
        image: '/placeholder.svg?height=300&width=400'
    },
    {
        title: 'Succession Planning',
        image: '/placeholder.svg?height=300&width=400'
    }
]

export default function AboutService() {
    return (
        <Box sx={{ bgcolor: '#000', color: 'white' }}>
            {/* Download Banner */}
            <Box
                sx={{
                    bgcolor: '#FFFFFF',
                    py: 3,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2
                }}
            >
                <Container>

                    <DownloadBruchure />
                </Container>

            </Box>

            {/* Services Content */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ mb: 6 }}>
                    {/* Orange line accent */}
                    <Box
                        sx={{
                            width: 40,
                            height: 2,
                            bgcolor: '#e65100',
                            mb: 3
                        }}
                    />

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '2rem', md: '2.75rem' },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    mb: { xs: 3, md: 0 }
                                }}
                            >
                                We position our clients at the forefront of their field by advanced services.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6
                                }}
                            >
                                We bring more than 20 years' senior experience forging collaborations across government, private sector and international forums.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Services Grid */}
                <Grid container spacing={3}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper
                                sx={{
                                    position: 'relative',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    aspectRatio: '4/3',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        '& .overlay': {
                                            bgcolor: 'rgba(0,0,0,0.3)'
                                        }
                                    }
                                }}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        bgcolor: 'rgba(0,0,0,0.4)',
                                        transition: 'background-color 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        p: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 600,
                                            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

