'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { gsap } from 'gsap'
import * as Icons from './custom-icons'
import Link from 'next/link'

interface ServiceCardProps {
    title: string
    description: string
    icon: keyof typeof Icons
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card = cardRef.current
        const line = lineRef.current

        if (!card || !line) return

        const timeline = gsap.timeline({ paused: true })

        timeline.to(line, {
            width: '100%',
            duration: 0.3,
            ease: 'power2.out'
        })

        timeline.to(card, {
            y: -8,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.2')

        card.addEventListener('mouseenter', () => timeline.play())
        card.addEventListener('mouseleave', () => timeline.reverse())

        return () => {
            timeline.kill()
        }
    }, [])

    const IconComponent = Icons[icon]

    return (
        <Link href='/services/5'>
            <Card
                ref={cardRef}
                sx={{
                    height: '100%',
                    minHeight: 280,
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -1,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: '#0088ff',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease-out'
                    }
                }}
            >
                <div
                    ref={lineRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '3px',
                        width: 0,
                        backgroundColor: '#0088ff'
                    }}
                />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                    '&:last-child': { pb: 4 }
                }}>
                    <Box sx={{ mb: 3 }}>
                        <IconComponent />
                    </Box>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 2,
                            fontWeight: 700,
                            fontSize: '1.25rem'
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            lineHeight: 1.7,
                            fontSize: '0.95rem'
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

