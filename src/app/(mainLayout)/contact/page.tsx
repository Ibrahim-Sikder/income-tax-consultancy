/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    ThemeProvider,
    createTheme,
    styled,
} from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import CommonBanner from '@/components/Share/CommonBanner';
import bannerImage from "../../../../src/assets/image/banner/banner.jpg"
import LocationMap from './_components/LocationMap';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0096FF',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
});

const IconBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.background.paper,
    },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function Contact() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CommonBanner backgroundImage={bannerImage} title='Contact Us ' />
            <Box sx={{ backgroundColor: 'background.default', color: 'white', minHeight: '100vh', py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ mb: 6 }}>
                                <Typography variant="h3" component="h1" sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}>
                                    <Box component="span" sx={{ color: 'primary.main', mr: 1 }}>—</Box>
                                    Get in touch for any kind of help and informations
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                <IconBox>
                                    <LocationOn />
                                </IconBox>
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>Our head office address:</Typography>
                                    <Typography variant="body1">3556 Hartford Way Vlg, Mount Pleasant, SC, 29466, Australia.</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, color: 'white' }}>
                                <IconBox>
                                    <Phone />
                                </IconBox>
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Call for help:</Typography>
                                    <Typography variant="body1">(734) 697-2907</Typography>
                                    <Typography variant="body1">(843) 971-1906</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconBox>
                                    <Email />
                                </IconBox>
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Mail us for information</Typography>
                                    <Typography variant="body1">noreply@envato.com</Typography>
                                    <Typography variant="body1">noreply@consultio.com</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="body1">
                                    We're glad to discuss your organisation's situation. So please contact us via the details below, or enter your request.
                                </Typography>
                            </Box>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <StyledTextField fullWidth label="First name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <StyledTextField fullWidth label="Last name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <StyledTextField fullWidth label="Your mail" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <StyledTextField fullWidth label="Phone number" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <StyledTextField fullWidth label="Web address" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel>Services</InputLabel>
                                            <StyledSelect label="Services">
                                                <MenuItem value="service1">Service 1</MenuItem>
                                                <MenuItem value="service2">Service 2</MenuItem>
                                                <MenuItem value="service3">Service 3</MenuItem>
                                            </StyledSelect>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyledTextField
                                            fullWidth
                                            label="Message..."
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            sx={{ mt: 2 }}
                                        >
                                            Send now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
                <LocationMap />
            </Box>
        </ThemeProvider>
    );
}

