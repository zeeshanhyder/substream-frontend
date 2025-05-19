import { APIResponse, HTTPStatus } from '@/client-api/types/service-response'
import { WatchHistoryEntry } from '@/client-api/types/watch-history'
import { serverFetch } from './util'

export const getWatchHistory = async (
    userId: string
): Promise<APIResponse<WatchHistoryEntry[] | null>> => {
    try {
        const watchHistoryRequest = await serverFetch(
            `/persona/${userId}/watch`
        )
        return await watchHistoryRequest.json()
    } catch (err) {
        console.log(err)
        return {
            error: 'Failed to fetch watch history',
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            data: null,
        }
    }
}
