/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { Facebook, Twitter, LinkedIn, Instagram, AccessTime, Phone, Email } from '@mui/icons-material'

export function TopBar() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 0 },
          }}
        >
          {/* Social Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Instagram fontSize="small" />
            </IconButton>
          </Stack>

          {/* Contact Info */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 0.5, sm: 3 },
              alignItems: 'center',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email fontSize="small" />
              <Typography variant="body2">info@consultio.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">(210) 123 451</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTime fontSize="small" />
              <Typography variant="body2">Sunday - Friday: 9am - 8pm</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

