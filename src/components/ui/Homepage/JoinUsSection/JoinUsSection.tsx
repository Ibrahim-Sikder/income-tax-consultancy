'use client'

import { useState } from 'react'
import { Box, Container, Typography, CircularProgress, TextField, Button, Avatar } from '@mui/material'
import { PlayCircle, Phone } from 'lucide-react'
import Image from 'next/image'

const progressItems = [
    { value: 80, label: 'Business Plan' },
    { value: 65, label: 'Strategy planning' },
    { value: 50, label: 'Marketing Idea' },
    { value: 80, label: 'Plan Skills' }
]

export default function JoinUsSection() {
    const [currentStep] = useState(1)

    return (
        <Box
            sx={{
                bgcolor: '#000',
                color: 'white',
                py: 8,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Dotted sphere decoration */}
            <Box
                sx={{
                    position: 'absolute',
                    right: -100,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 400,
                    height: 400,
                    backgroundImage: 'url("/placeholder.svg?height=400&width=400")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.5
                }}
            />

            <Container maxWidth="lg">
                {/* Progress circles */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: { xs: 2, md: 6 },
                        mb: 8,
                        flexWrap: 'wrap'
                    }}
                >
                    {progressItems.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Box sx={{ position: 'relative', width: 80, height: 80 }}>
                                <CircularProgress
                                    variant="determinate"
                                    value={100}
                                    size={80}
                                    thickness={2}
                                    sx={{
                                        color: 'rgba(255,255,255,0.1)',
                                        position: 'absolute'
                                    }}
                                />
                                <CircularProgress
                                    variant="determinate"
                                    value={item.value}
                                    size={80}
                                    thickness={2}
                                    sx={{
                                        color: '#007bff',
                                        position: 'absolute',
                                        transform: 'rotate(-90deg)'
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Typography variant="h6" component="div">
                                        {`${item.value}%`}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                sx={{
                                    mt: 1,
                                    fontSize: '0.875rem',
                                    color: 'rgba(255,255,255,0.7)',
                                    textAlign: 'center'
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Main content */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        alignItems: 'center'
                    }}
                >
                    {/* Video section */}
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: '100%', md: '50%' },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                border: '2px solid #007bff',
                                transform: 'skew(-5deg)',
                                borderRadius: '10px'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                paddingTop: '56.25%',
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Business video"
                                fill
                                style={{
                                    objectFit: 'cover'
                                }}
                            />
                            <Button
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'transparent'
                                    }
                                }}
                            >
                                <PlayCircle size={64} />
                            </Button>
                        </Box>
                    </Box>

                    {/* Form section */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            bgcolor: 'rgba(255,255,255,0.05)',
                            p: 4,
                            borderRadius: 2
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#007bff',
                                fontWeight: 600,
                                mb: 1,
                                display: 'block'
                            }}
                        >
                            WANT TO HIRE US?
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Want to work with us?
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                mb: 4
                            }}
                        >
                            Like what you see? Contact us to see what type of solutions we can deploy for your business!
                        </Typography>

                        {/* Step indicators */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mb: 4
                            }}
                        >
                            {[1, 2, 3].map((step) => (
                                <Box
                                    key={step}
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        bgcolor: currentStep >= step ? '#007bff' : 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        '&::after': step < 3 ? {
                                            content: '""',
                                            position: 'absolute',
                                            right: -32,
                                            width: 24,
                                            height: 2,
                                            bgcolor: currentStep > step ? '#007bff' : 'rgba(255,255,255,0.1)'
                                        } : {}
                                    }}
                                >
                                    {step}
                                </Box>
                            ))}
                        </Box>

                        {/* Form fields */}
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                placeholder="Your name..."
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'rgba(255,255,255,0.05)'
                                    }
                                }}
                            />
                            <TextField
                                placeholder="Mail address..."
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'rgba(255,255,255,0.05)'
                                    }
                                }}
                            />
                            <TextField
                                placeholder="Mobile number..."
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'rgba(255,255,255,0.05)'
                                    }
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#007bff',
                                    py: 1.5,
                                    '&:hover': {
                                        bgcolor: '#0056b3'
                                    }
                                }}
                            >
                                Next step
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Help desk section */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 6,
                        flexWrap: 'wrap',
                        gap: 2
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                            src="/placeholder.svg?height=48&width=48"
                            sx={{ width: 48, height: 48 }}
                        />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 300 }}>
                            As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="caption" sx={{ color: '#007bff' }}>
                            Help Desk 24/7
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Phone size={20} color="#007bff" />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                +(01) 246 2365
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

