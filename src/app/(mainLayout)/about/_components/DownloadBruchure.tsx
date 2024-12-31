'use client'

import { Box, Button, Typography } from '@mui/material'
import { Download } from '@mui/icons-material'

export default function DownloadBruchure() {
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          bgcolor: '#111',
          borderRadius: 2,
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: 2
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flexWrap: { xs: 'wrap', sm: 'nowrap' }
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            Want to know more about us?
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Just download brochure...
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{
            bgcolor: '#e65100',
            '&:hover': {
              bgcolor: '#ef6c00'
            },
            px: 3,
            py: 1.5,
            borderRadius: 1,
            textTransform: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          Download Brochure
        </Button>
      </Box>
    </Box>
  )
}

