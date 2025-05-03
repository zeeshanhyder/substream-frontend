import { PersonaUser } from '@/api/persona'
import { Profile } from './profile'
import { AddProfile } from './add-profile'

export function Profiles({
    profiles,
}: {
    profiles: PersonaUser[] | null | undefined
}) {
    if (!profiles) return <AddProfile />
    const profileList = profiles.map((profile) => {
        return <Profile key={profile.id} profile={profile} />
    })

    return (
        <>
            {profileList}
            <AddProfile />
        </>
    )
}
