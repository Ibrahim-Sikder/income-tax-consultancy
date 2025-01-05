'use client'

import { useState, useEffect } from 'react'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material'
import { Menu as MenuIcon, Close, } from '@mui/icons-material'
import Link from 'next/link'
import { TopBar } from './TopBar'

const menuItems = [
  { text: 'Home', href: '/', isNew: false },
  { text: 'Services', href: '/services' },
  { text: 'About', href: '/about', isNew: false },
  { text: 'Blog', href: '/blog', isNew: false },
  { text: 'Contact', href: '/contact', isNew: false },
  { text: 'Contact', href: '/contact', isNew: false },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <TopBar />
      <AppBar position="sticky" sx={{ bgcolor: '#092A49', boxShadow: 'none' }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: 80 }}
          >
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
               
                SITC
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {isMounted && !isMobile && (
              <Stack direction="row" spacing={5}>
                {menuItems.map((item) => (
                  <Link href={item.href} key={item.text} passHref>
                    <Box
                      component="a"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        textDecoration: 'none',
                        '&:hover': { color: '#007bff' },
                      }}
                    >
                      {item.text}
                      {item.isNew && (
                        <Chip
                          label="NEW"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -20,
                            bgcolor: '#007bff',
                            color: 'white',
                            height: 20,
                          }}
                        />
                      )}
                    </Box>
                  </Link>
                ))}
              </Stack>
            )}

            {/* Right Actions */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Button>Quick Contact </Button>

              {isMounted && isMobile && (
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 1 }}
                >
                  {mobileOpen ? <Close /> : <MenuIcon />}
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 280,
              bgcolor: '#1a1a1a',
              color: 'white',
            },
          }}
        >
          <List sx={{ pt: 8 }}>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Link href={item.href} passHref>
                  <ListItemButton
                    sx={{ textDecoration: 'none', '&:hover': { color: '#007bff' } }}
                  >
                    <ListItemText primary={item.text} />
                    {item.isNew && (
                      <Chip
                        label="NEW"
                        size="small"
                        sx={{
                          bgcolor: '#007bff',
                          color: 'white',
                          height: 20,
                        }}
                      />
                    )}
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </>
  )
}
