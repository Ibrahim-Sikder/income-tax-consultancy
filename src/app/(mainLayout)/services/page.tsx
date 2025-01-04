'use client'

import { Container, Grid, Typography, Box } from '@mui/material'
import ServiceCard from './_components/ServiceCard'
import CommonBanner from '@/components/Share/CommonBanner'
import serviceBanner from '../../../../src/assets/image/services/service2.jpg'

const services = [
    {
        title: 'Income Tax',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'FinancialLimitIcon'
    },
    {
        title: 'Vat',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'FinancialGrowthIcon'
    },
    {
        title: 'Trade Liscence',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'TaxManagementIcon'
    },
    {
        title: 'Company Registration',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'CustomerExperienceIcon'
    },
    {
        title: 'Export',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'PrivateEquityIcon'
    },
    {
        title: 'Import',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'AutomotiveIcon'
    },
    {
        title: 'Tradmark',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'AutomotiveIcon'
    },
    {
        title: 'Audit',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'AutomotiveIcon'
    },
    {
        title: 'Copyright',
        description: 'Lorem Ipsum is simply dummy text of the printing and its typeseting industry.',
        icon: 'AutomotiveIcon'
    },
] as const

export default function ServicesSection() {
    return (
        <>
            <CommonBanner title='Services' backgroundImage={serviceBanner} />
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ mb: 8 }}>
                    <Typography
                        component="span"
                        sx={{
                            color: '#0088ff',
                            display: 'block',
                            mb: 2,
                            fontWeight: 500,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: 0,
                                width: 40,
                                height: 2,
                                backgroundColor: '#0088ff'
                            }
                        }}
                    >
                        Services
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                maxWidth: '600px',
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                lineHeight: 1.2
                            }}
                        >
                            We position our clients at the forefront of their field by advancing an agenda.
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: '400px',
                                color: 'text.secondary',
                                display: { xs: 'none', md: 'block' }
                            }}
                        >
                            Easily apply to multiple jobs with one click! Quick Apply shows you recommended jobs based off your most recent search and allows you to apply to 25+ jobs in a matter of seconds!
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={4}>
                    {services.map((service) => (
                        <Grid item xs={12} md={4} key={service.title}>
                            <ServiceCard {...service} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

