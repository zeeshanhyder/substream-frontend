import { ExperienceHeading, TextCustom } from '@/components/ui/typography'
import { withSuspense } from '@/utils/with-suspense'
import { ProfilesContainer } from './profiles-container'
import AvatarFallback from '@/utils/avatar-skeleton'

const ProfilesContainerSuspense = withSuspense(
    ProfilesContainer,
    AvatarFallback
)

export default function ProfileSelectExperience() {
    return (
        <div className="flex flex-col h-screen mx-[10vw]">
            <div className="flex flex-col h-1/2 mt-[10vmax]">
                <ExperienceHeading>Profile Select</ExperienceHeading>
                <TextCustom className="text-4xl opacity-35">
                    Who is watching?
                </TextCustom>
            </div>
            <div className="flex flex-row items-center h-1/2">
                <ProfilesContainerSuspense />
            </div>
        </div>
    )
}
