/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Box, Typography, Breadcrumbs, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image, { StaticImageData } from "next/image"

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DynamicHeroBannerProps {
  title: string;
  backgroundImage: StaticImageData;
  breadcrumbs?: BreadcrumbItem[];
}

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '400px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}))

const BackgroundImage = styled(Image)({
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: 0,
})

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
})

export default function CommonBanner({ title, backgroundImage, breadcrumbs = [] }: DynamicHeroBannerProps) {
  return (
    <BannerContainer>
      <BackgroundImage
        src={backgroundImage}
        alt="Banner background"
        fill
        priority
        sizes="100vw"
        quality={100}
      />
      <ContentWrapper>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.75rem' },
            fontWeight: 700,
            marginBottom: 2,
          }}
        >
          {title}
        </Typography>
        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              '& .MuiBreadcrumbs-separator': {
                color: 'white',
              },
            }}
          >
            {breadcrumbs.map((item, index) => (
              item.href ? (
                <Link
                  key={index}
                  color="inherit"
                  href={item.href}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <Typography key={index} color="white">{item.label}</Typography>
              )
            ))}
          </Breadcrumbs>
        )}
      </ContentWrapper>
    </BannerContainer>
  )
}

