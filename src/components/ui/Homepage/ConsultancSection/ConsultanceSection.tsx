'use client'

import { Box, Container, Typography, Grid, } from '@mui/material'
import { ClipboardList, Crown, Users2, Trophy, Briefcase, Star } from 'lucide-react'
import Image from 'next/image'
import consultance from '../../../../../src/assets/image/about/consultance.png'
const stats = [
    {
        icon: <Users2 className="w-8 h-8" />,
        number: "105 +",
        label: "Team members"
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        number: "18 +",
        label: "Winning Awards"
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        number: "300 +",
        label: "Completed Works"
    },
    {
        icon: <Star className="w-8 h-8" />,
        number: "215 +",
        label: "Client's Feedback"
    }
]

export default function ConsultingSection() {
    return (
        <Box sx={{ bgcolor: '#000', color: 'white', py: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 700,
                                lineHeight: 1.2,
                                mb: 3
                            }}
                        >
                            Learn more about
                            <br />
                            our consulting plans.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                mb: 6,
                                fontSize: '1.1rem'
                            }}
                        >
                            Like what you see? Contact us to see what type of solutions we can deploy for your business!
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                                <Box
                                    sx={{
                                        color: '#007bff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <ClipboardList size={32} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1
                                        }}
                                    >
                                        Business Management
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'rgba(255,255,255,0.7)'
                                        }}
                                    >
                                        We develop the relationships that under the next phase in your organisation.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                                <Box
                                    sx={{
                                        color: '#007bff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Crown size={32} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1
                                        }}
                                    >
                                        Best Planner
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'rgba(255,255,255,0.7)'
                                        }}
                                    >
                                        We develop the relationships that under the next phase in your organisation.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: { xs: '300px', md: '500px' },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    bottom: -20,
                                    left: 20,
                                    border: '2px solid #007bff',
                                    zIndex: 0
                                }
                            }}
                        >
                            <Image
                                src={consultance}
                                alt="Business consulting"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    zIndex: 1
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 8,
                        p: 4,
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderRadius: 2,
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: '20%',
                                bottom: '20%',
                                width: '1px',
                                bgcolor: '#007bff',
                                left: '25%'
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '20%',
                                bottom: '20%',
                                width: '1px',
                                bgcolor: '#007bff',
                                left: '50%'
                            },
                            '& > div:last-child::before': {
                                content: '""',
                                position: 'absolute',
                                top: '20%',
                                bottom: '20%',
                                width: '1px',
                                bgcolor: '#007bff',
                                left: '-12px'
                            }
                        }}
                    >
                        {stats.map((stat, index) => (
                            <Grid
                                item
                                xs={6}
                                md={3}
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    position: 'relative'
                                }}
                            >
                                <Box
                                    sx={{
                                        color: '#007bff',
                                        mb: 2
                                    }}
                                >
                                    {stat.icon}
                                </Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 1,
                                        color: '#007bff'
                                    }}
                                >
                                    {stat.number}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'rgba(255,255,255,0.7)'
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

