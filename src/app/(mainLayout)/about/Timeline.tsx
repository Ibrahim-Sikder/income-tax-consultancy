'use client'

import { useEffect, useRef } from 'react'
import { Box, Typography, Container, Paper } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineItem {
  date: string
  title: string
  description?: string
  side: 'left' | 'right'
}

const timelineData: TimelineItem[] = [
  {
    date: '12th Jan, 2018',
    title: 'Establishment of Constrio',
    side: 'right'
  },
  {
    date: '2nd Feb, 2018',
    title: 'Exhibition Planning & Exhibition Management',
    side: 'left'
  },
  {
    date: '8th Jul, 2018',
    title: 'Registered as a construction company',
    side: 'right'
  },
  {
    date: '21st Jul, 2018',
    title: 'Growth internationally first half of the 2018s',
    side: 'left'
  },
  {
    date: '18th Aug, 2018',
    title: 'Construction bought the Greek company Delta',
    side: 'right'
  },
  {
    date: '27th Sep, 2018',
    title: 'For lean business plans, operational plans, and strategic plans',
    side: 'right'
  },
  {
    date: '2nd Jan, 2019',
    title: 'Focus business history on what matters to planning',
    side: 'left'
  },
  {
    date: '8th Jul, 2019',
    title: 'Award winner',
    side: 'right'
  },
  {
    date: '22nd Sep, 2019',
    title: 'History to Unite and Inspire People',
    side: 'left'
  }
]

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const timeline = timelineRef.current
    const items = itemsRef.current.filter(Boolean)

    if (!timeline || items.length === 0) return

    // Timeline line animation
    gsap.fromTo(
      timeline,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: timeline,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      }
    )

    // Items animation
    items.forEach((item, index) => {
      if (!item) return

      gsap.fromTo(
        item,
        { 
          opacity: 0,
          x: item.classList.contains('left') ? -50 : 50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.2
        }
      )
    })
  }, [])

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #092A49, #1a1a1a)',
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/noise.png")',
          opacity: 0.05,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: 1,
              fontSize: { xs: '2rem', md: '3.5rem' },
              lineHeight: 1.2
            }}
          >
            Consultio is a professional
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'white',
              fontSize: { xs: '2rem', md: '3.5rem' },
              lineHeight: 1.2
            }}
          >
            consulting company
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              mx: 'auto',
              mt: 3
            }}
          >
            At vero eos et accusamus et iusto odio digni ssimos ducimus qui blanditiis praeae. Ntium voluum deleniti atque corrupti quos.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              bgcolor: '#0088ff',
              transformOrigin: 'top',
              ref: timelineRef
            }
          }}
        >
          {timelineData.map((item, index) => (
            <Box
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={item.side}
              sx={{
                position: 'relative',
                padding: '20px',
                width: { xs: '100%', md: '50%' },
                left: { xs: 0, md: item.side === 'left' ? 0 : '50%' },
                textAlign: { xs: 'left', md: item.side === 'left' ? 'right' : 'left' },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: '20px',
                  height: '20px',
                  bgcolor: '#0088ff',
                  borderRadius: '50%',
                  [item.side === 'left' ? 'right' : 'left']: { xs: '-10px', md: '-10px' },
                  transform: 'translateY(-50%)',
                  zIndex: 2
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: { xs: '20px', md: '40px' },
                  height: '2px',
                  bgcolor: '#0088ff',
                  [item.side === 'left' ? 'right' : 'left']: { xs: '10px', md: '10px' },
                  transform: 'translateY(-50%)',
                  zIndex: 1
                }
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#0088ff',
                    mb: 1,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  {item.date}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white',
                    fontWeight: 500,
                    lineHeight: 1.5
                  }}
                >
                  {item.title}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

