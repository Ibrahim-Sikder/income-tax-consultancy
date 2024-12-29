'use client'

import { useState } from 'react'
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
  Button,
  Badge,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { Menu as MenuIcon, Close, Search, ShoppingCart } from '@mui/icons-material'

const menuItems = [
  { text: 'Demos', isNew: false },
  { text: 'Services', isNew: true },
  { text: 'Pages', isNew: false },
  { text: 'Portfolio', isNew: false },
  { text: 'Blog', isNew: false },
  { text: 'Elements', isNew: false },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#1a1a1a', boxShadow: 'none' }}>
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
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  bgcolor: '#007bff',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                }}
              >
                C
              </Box>
              Consultio
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Stack direction="row" spacing={2}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  sx={{
                    position: 'relative',
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
                </Button>
              ))}
            </Stack>
          )}

          {/* Right Actions */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="inherit">
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={2} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            {isMobile && (
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
          keepMounted: true, // Better open performance on mobile.
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
              <ListItemButton sx={{ '&:hover': { color: '#007bff' } }}>
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
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}

