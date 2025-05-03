'use client'
import { ExperienceHeading, TextCustom } from '@/components/ui/typography'
import { useUserSessionStore } from '@/providers/user-session-provider'
import { useState, useEffect } from 'react'
import { useCurrentSelectedTitle } from './selected-media-title'

export const WelcomeMessage = () => {
    const fullName = useUserSessionStore((state) => state.fullName)
    const firstName = fullName.split(' ')[0]
    const { selectedTitle } = useCurrentSelectedTitle()
    const [fadeOut, setFadeOut] = useState(1)
    useEffect(() => {
        setTimeout(() => {
            if (selectedTitle?.id) {
                setFadeOut(0)
            }
        }, 0)
    }, [selectedTitle?.id])
    return (
        <div
            className="flex flex-col"
            style={{ opacity: fadeOut, transition: 'all 1s ease-in-out' }}
        >
            <ExperienceHeading>Your Library</ExperienceHeading>
            <TextCustom className="text-4xl opacity-35">
                Welcome, {firstName}
            </TextCustom>
        </div>
    )
}
