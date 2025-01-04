/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useRef, useState } from 'react'
import { Box, Container, Typography, Card, CardContent, IconButton } from '@mui/material'
import { gsap } from 'gsap'
import Image from 'next/image'
import { ArrowForward } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import blog from '../../../../../src/assets/image/blog/blog.jpg'

gsap.registerPlugin(ScrollTrigger)

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'transparent',
  color: 'white',
  overflow: 'hidden',
  cursor: 'pointer',
  height: '100%',
  '& .arrow-button': {
    position: 'absolute',
    bottom: 20,
    right: 20,
    opacity: 0,
    transform: 'translateX(20px)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '& .card-overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.3s ease-in-out',
  },
}))

const newsItems = [
  {
    id: 1,
    title: 'Reasons to explain fast business builder.',
    date: 'November 5, 2019',
    author: 'Admin',
    image: blog,
  },
  {
    id: 2,
    title: 'Blackpool polices hunt for David Schwimmer',
    date: 'November 4, 2018',
    author: 'Admin',
    image: blog,
  },
  {
    id: 3,
    title: 'How Stay Calm from the First Time.',
    date: 'November 5, 2019',
    author: 'Admin',
    image: blog,
  },
]

export default function NewsSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current

    gsap.set([section, ...cards], { opacity: 0, y: 50 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }, '-=0.5')

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'bottom top+=100',
          toggleActions: 'play none none reverse',
        },
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power2.out',
      })
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleCardHover = (id: any, isEnter: any) => {
    setHoveredCard(isEnter ? id : null)
    gsap.to(cardsRef.current[id - 1], {
      scale: isEnter ? 1.05 : 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <Box sx={{ bgcolor: 'black', py: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box ref={sectionRef} sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#007FFF',
              fontWeight: 600,
              letterSpacing: 1,
              mb: 2,
              display: 'block',
            }}
          >
            LATEST NEWS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '3.5rem' },
              lineHeight: 1.2,
            }}
          >
            We're ready to share our
            <br />
            advice and experience.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Like what you see? Contact us to see what type of solutions
            we can deploy for your business!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {newsItems.map((item, index: number) => (
            <StyledCard
              key={item.id}
              elevation={0}
              // ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={() => handleCardHover(item.id, true)}
              onMouseLeave={() => handleCardHover(item.id, false)}
            >
              <Box sx={{ position: 'relative', paddingTop: '75%' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <Box className="card-overlay" />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {item.date}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {item.author}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1.25rem',
                      transition: 'transform 0.3s ease-in-out',
                      transform: hoveredCard === item.id ? 'translateY(-10px)' : 'none',
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
                <IconButton className="arrow-button" size="small">
                  <ArrowForward />
                </IconButton>
              </Box>
            </StyledCard>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

