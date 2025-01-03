/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import { Container, Grid, Typography, Box, Tab, Tabs, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Check, ChevronLeft, ChevronRight, Download, Description } from '@mui/icons-material'
import Image from 'next/image'
import serviceImg from '../../../../../src/assets/image/services/service3.jpg'
import serviceImg2 from '../../../../../src/assets/image/services/service4.jpg'
import serviceBanner from '../../../../../src/assets/image/services/service2.jpg'
import CommonBanner from '@/components/Share/CommonBanner'
interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`services-tabpanel-${index}`}
            aria-labelledby={`services-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

const services = [
    {
        title: 'Brand & Package',
        icon: '👥',
        description: 'A feature of great leaders is that they never stop for learning. Mentorship and Coaching for your leaders.'
    },
    {
        title: 'Web Designing',
        icon: '🎯',
        description: 'A feature of great leaders is that they never stop for learning. Mentorship and Coaching for your leaders.'
    }
]

export default function ServicesSection() {
    const [tabValue, setTabValue] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const nextSlide = () => {
        setSlideIndex((prev) => (prev + 1) % services.length)
    }

    const prevSlide = () => {
        setSlideIndex((prev) => (prev - 1 + services.length) % services.length)
    }

    return (

        <>
            <CommonBanner backgroundImage={serviceBanner} title='Audit & assurance' />
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                component="span"
                                sx={{
                                    color: '#0088ff',
                                    display: 'block',
                                    mb: 2,
                                    fontSize: '0.875rem'
                                }}
                            >
                                Services
                            </Typography>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3
                                }}
                            >
                                We give the best Services
                            </Typography>
                            <Typography sx={{ mb: 3, color: 'text.secondary' }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </Typography>
                            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                            </Typography>
                            <List>
                                {['Sed do eiusmod tempor incididunt ut', 'Labore et dolore magna aliqua', 'Ut enim ad minim veniam quis nostrud'].map((item, index) => (
                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <Check sx={{ color: '#0088ff' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <Box sx={{ mb: 6 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Image
                                        src={serviceImg}
                                        alt="Service Image 1"
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Image
                                        src={serviceImg2}
                                        alt="Service Image 2"
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={tabValue} onChange={handleTabChange}>
                                <Tab
                                    label="PERSONAL CARE"
                                    sx={{
                                        fontWeight: 600,
                                        '&.Mui-selected': { color: '#0088ff' }
                                    }}
                                />
                                <Tab
                                    label="SUPER SUPPORT"
                                    sx={{
                                        fontWeight: 600,
                                        '&.Mui-selected': { color: '#0088ff' }
                                    }}
                                />
                                <Tab
                                    label="GUARANTEED"
                                    sx={{
                                        fontWeight: 600,
                                        '&.Mui-selected': { color: '#0088ff' }
                                    }}
                                />
                            </Tabs>
                        </Box>

                        <TabPanel value={tabValue} index={0}>
                            <Typography>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo.
                            </Typography>
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <Typography>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </Typography>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <Typography>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                            </Typography>
                        </TabPanel>

                        <Box sx={{ mt: 6, position: 'relative' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    transform: `translateX(-${slideIndex * 100}%)`,
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            >
                                {services.map((service, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            flex: '0 0 calc(50% - 8px)',
                                            bgcolor: 'black',
                                            color: 'white',
                                            p: 4,
                                            borderRadius: 2,
                                            minWidth: 280
                                        }}
                                    >
                                        <Typography variant="h2" sx={{ mb: 2, fontSize: '3rem' }}>
                                            {service.icon}
                                        </Typography>
                                        <Typography variant="h6" sx={{ mb: 2 }}>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {service.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Button
                                onClick={prevSlide}
                                sx={{
                                    position: 'absolute',
                                    left: -20,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    minWidth: 40,
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bgcolor: 'white',
                                    boxShadow: 2,
                                    '&:hover': { bgcolor: 'white' }
                                }}
                            >
                                <ChevronLeft />
                            </Button>
                            <Button
                                onClick={nextSlide}
                                sx={{
                                    position: 'absolute',
                                    right: -20,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    minWidth: 40,
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bgcolor: 'white',
                                    boxShadow: 2,
                                    '&:hover': { bgcolor: 'white' }
                                }}
                            >
                                <ChevronRight />
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, mb: 4 }}>
                            {['Tax Consultancy', 'Business Plan', 'Amazing Strategy', 'Global Insights'].map((item, index) => (
                                <Button
                                    key={index}
                                    fullWidth
                                    sx={{
                                        justifyContent: 'flex-start',
                                        py: 2,
                                        px: 3,
                                        mb: 1,
                                        bgcolor: 'white',
                                        color: 'text.primary',
                                        '&:hover': {
                                            bgcolor: '#0088ff',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                            <Button
                                fullWidth
                                sx={{
                                    justifyContent: 'flex-start',
                                    py: 2,
                                    px: 3,
                                    bgcolor: 'black',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'black',
                                    }
                                }}
                            >
                                Audit & assurance
                            </Button>
                        </Box>

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Contact
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                                3111 West Allegheny Avenue
                                <br />
                                Pennsylvania 19132
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                                1-982-782-5297
                                <br />
                                1-982-125-6378
                            </Typography>
                            <Typography sx={{ color: '#0088ff' }}>
                                support@consultio.com
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Brochures
                            </Typography>
                            <Typography sx={{ mb: 3 }}>
                                View our 2020 Medical prospectus of brochure for an easy to read guide on all of the services offer.
                            </Typography>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<Download />}
                                sx={{ mb: 2 }}
                            >
                                Download Brochure
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<Description />}
                            >
                                Characteristics
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

