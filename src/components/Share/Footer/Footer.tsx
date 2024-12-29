'use client'

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Stack,
  Link as MuiLink,
} from '@mui/material'
import {
  Facebook,
  Twitter,
  YouTube,
  CheckCircleOutline,
  Phone,
  LocationOn,
  Email,
} from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#0B1B24', color: 'white' }}>
      {/* Newsletter Section */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                bgcolor: '#fff',
                p: 4,
              }}
            >
              <Typography variant="h4" sx={{ color: '#FFA500', fontWeight: 'bold', mb: 2 }}>
                Subscribe For Our Newsletter
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                bgcolor: '#FFA500',
                p: 4,
              }}
            >
              <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
                Duis Malesuada Suscipit Lobortis.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  placeholder="Email"
                  fullWidth
                  sx={{
                    '& .MuiInputBase-root': {
                      bgcolor: 'white',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#0B1B24',
                    '&:hover': {
                      bgcolor: '#162932',
                    },
                  }}
                >
                  Subscribe Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Footer */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Taxation"
                width={200}
                height={60}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Box>
            <Typography sx={{ color: '#999' }}>
              Suspendisse congue tincidunt nisi, in eleifend metus placerat eu. Nunc eget tristique nisi.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Quick Link
            </Typography>
            <List sx={{ p: 0 }}>
              {['About Us', 'Services', 'Cases', 'Pricing', 'Contact'].map((text) => (
                <ListItem key={text} sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleOutline sx={{ color: '#FFA500', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link href="#" style={{ color: '#999', textDecoration: 'none' }}>
                        {text}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Useful Link
            </Typography>
            <List sx={{ p: 0 }}>
              {['Disclaimer', 'Support', "FAQ's", 'Blogs'].map((text) => (
                <ListItem key={text} sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleOutline sx={{ color: '#FFA500', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link href="#" style={{ color: '#999', textDecoration: 'none' }}>
                        {text}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Get In Touch */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Get In Touch
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOn sx={{ color: '#FFA500' }} />
                <Typography sx={{ color: '#999' }}>99 Roving St., Pku</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Phone sx={{ color: '#FFA500' }} />
                <Typography sx={{ color: '#999' }}>+123-456-789</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Email sx={{ color: '#FFA500' }} />
                <Typography sx={{ color: '#999' }}>hello@awesomesite.com</Typography>
              </Box>
              <Box>
                <Typography sx={{ mb: 1, color: '#999' }}>Social media :</Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton size="small" sx={{ color: '#FFA500' }}>
                    <Facebook />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#FFA500' }}>
                    <Twitter />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#FFA500' }}>
                    <YouTube />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', py: 2 }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography sx={{ color: '#999' }}>
                ©Copyright 2022. All Rights Reserved. Rometheme
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={2}>
                <MuiLink href="#" sx={{ color: '#999', textDecoration: 'none' }}>
                  Privacy Policy
                </MuiLink>
                <MuiLink href="#" sx={{ color: '#999', textDecoration: 'none' }}>
                  Terms of use
                </MuiLink>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

