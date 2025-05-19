import { APIResponse, HTTPStatus } from '@/client-api/types/service-response'
import { serverFetch } from './util'
import { PersonaUser } from '@/client-api/persona'

export async function addNewProfile(
    form: FormData
): Promise<APIResponse<PersonaUser | null>> {
    const fullName = form.get('fullName')?.toString()
    const emailAddress = form.get('emailAddress')?.toString()
    const homeDirectory = form.get('homeDirectory')?.toString()

    try {
        const userResult = await serverFetch('/persona/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName,
                emailAddress,
                homeDirectory,
            }),
        })
        return await userResult.json()
    } catch (err) {
        console.log(err)
        return {
            error: 'Failed to create user',
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            data: null,
        }
    }
}
