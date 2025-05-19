'use server'
import { Profiles } from '@/components/profiles/profiles'
import { ServerToast } from '@/components/ui/toast/server-toast'
import { getProfiles } from '@/server-api/get-profiles'

export async function ProfilesContainer() {
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
    return <Profiles profiles={data} />
}
