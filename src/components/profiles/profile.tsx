'use client'
import { PersonaUser } from '@/api/persona'
import { Heading1 } from '@/components/ui/typography'
import { useUserSessionStore } from '@/providers/user-session-provider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Profile = ({ profile }: { profile: PersonaUser }) => {
    const router = useRouter()
    const {
        setAvatarUrl,
        setEmailAddress,
        setHomeDirectory,
        setMediaPathList,
        setUserFullName,
        setUserId,
    } = useUserSessionStore((state) => state)

    const saveProfile = () => {
        localStorage.setItem('profile', JSON.stringify(profile.id))
        setAvatarUrl(profile.avatarUrl)
        setEmailAddress(profile.emailAddress)
        setHomeDirectory(profile.homeDirectory)
        setMediaPathList(profile.mediaPathList)
        setUserFullName(profile.fullName)
        setUserId(profile.id)
        router.push('/library')
    }

    return (
        <div
            onClick={saveProfile}
            className="flex flex-col mr-12 items-center text-center cursor-pointer"
        >
            <img
                width={100}
                height={100}
                src={`data:image/png;base64,${profile.avatarUrl}`}
                alt={profile.fullName}
            />
            <Heading1>{profile.fullName}</Heading1>
        </div>
    )
}
