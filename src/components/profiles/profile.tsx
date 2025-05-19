'use client'
import { PersonaUser } from '@/client-api/persona'
import { Heading1 } from '@/components/ui/typography'

export const Profile = ({
    profile,
    saveProfile,
}: {
    profile: PersonaUser
    saveProfile: (p: PersonaUser) => void
}) => {
    return (
        <div
            onClick={() => saveProfile(profile)}
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
