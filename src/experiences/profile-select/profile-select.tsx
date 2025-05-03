import { getProfiles, PersonaUser } from '@/api/persona'
import { Profiles } from '@/components/profiles/profiles'
import { ServerToast } from '@/components/ui/toast/server-toast'
import { ExperienceHeading, TextCustom } from '@/components/ui/typography'
import { withSuspense } from '@/utils/with-suspense'

async function ProfilesContainer() {
    const { data, error } = await getProfiles()
    if (error) {
        return (
            <ServerToast
                title="Error"
                toastMessage="Unable to load profiles"
                color="danger"
                variant="solid"
            />
        )
    }
    return (
        <div className="flex flex-row items-center h-1/2">
            <Profiles profiles={data} />
        </div>
    )
}

const ProfilesContainerSuspense = withSuspense(ProfilesContainer)

export default function ProfileSelectExperience() {
    return (
        <div className="flex flex-col h-screen mx-[10vw]">
            <div className="flex flex-col h-1/2 mt-[10vmax]">
                <ExperienceHeading>Profile Select</ExperienceHeading>
                <TextCustom className="text-4xl opacity-35">
                    Who is watching?
                </TextCustom>
            </div>
            <ProfilesContainerSuspense />
        </div>
    )
}
