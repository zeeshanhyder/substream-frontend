import { APIResponse, HTTPStatus } from '@/client-api/types/service-response'
import { serverFetch } from './util'
import { PersonaUser } from '@/client-api/persona'

export const getProfiles = async (): Promise<
    APIResponse<PersonaUser[] | null>
> => {
    try {
        const profilesRequest = await serverFetch('/persona/users')
        return await profilesRequest.json()
    } catch (err) {
        console.log(err)
        return {
            error: 'Failed to fetch profiles',
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            data: null,
        }
    }
}
