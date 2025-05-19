'use client'
import { PersonaUser } from '@/client-api/persona'
import { Profile } from './profile'
import { AddProfile } from './add-profile'
import { createNewSession } from '@/server/actions/create-session.action'
import { useUserSessionStore } from '@/providers/user-session-provider'
import router from 'next/router'

export function Profiles({
    profiles,
}: {
    profiles: PersonaUser[] | null | undefined
}) {
    const {
        setAvatarUrl,
        setEmailAddress,
        setHomeDirectory,
        setMediaPathList,
        setUserFullName,
        setUserId,
    } = useUserSessionStore((state) => state)

    const saveProfile = (profile: PersonaUser) => {
        setAvatarUrl(profile.avatarUrl)
        setEmailAddress(profile.emailAddress)
        setHomeDirectory(profile.homeDirectory)
        setMediaPathList(profile.mediaPathList)
        setUserFullName(profile.fullName)
        setUserId(profile.id)
        createNewSession(profile.id).then(() => {
            router.push('/library')
        })
    }
    if (!profiles) return <AddProfile />
    const profileList = profiles.map((profile) => {
        return (
            <Profile
                saveProfile={saveProfile}
                key={profile.id}
                profile={profile}
            />
        )
    })

    return (
        <>
            {profileList}
            <AddProfile />
        </>
    )
}
