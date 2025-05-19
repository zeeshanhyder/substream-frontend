import { APIResponse, HTTPStatus } from '@/client-api/types/service-response'
import { serverFetch } from './util'
import { MediaEntity } from '@/client-api/types/media-entity'

export async function getUserMedia(
    userId: string
): Promise<APIResponse<MediaEntity[] | null>> {
    try {
        const mediaResult = await serverFetch(`/persona/${userId}/media`)
        return await mediaResult.json()
    } catch (err) {
        console.log(err)
        return {
            error: 'Failed to fetch media',
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            data: null,
        }
    }
}
