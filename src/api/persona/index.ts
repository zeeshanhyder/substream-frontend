import { serverFetch } from '../config/config'
import { MediaEntity } from '../types/media-entity'
import { APIResponse, HTTPStatus } from '../types/service-response'
import { WatchHistoryEntry } from '../types/watch-history'

export type PersonaUser = {
    id: string
    fullName: string
    emailAddress: string
    avatarUrl: string
    homeDirectory: string
    mediaPathList: string[]
}

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

export const getWatchHistory = async (): Promise<
    APIResponse<WatchHistoryEntry[] | null>
> => {
    try {
        const watchHistoryRequest = await serverFetch(
            '/persona/2plT7NnugdweKWvAKGeWa/watch'
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

export const getMediaById = async (
    userId: string,
    mediaId: string
): Promise<APIResponse<MediaEntity | null>> => {
    try {
        const mediaTitle = await serverFetch(
            `/persona/${userId}/media/${mediaId}`
        )
        return await mediaTitle.json()
    } catch (err) {
        console.log(err)
        return {
            error: 'Failed to fetch watch history',
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            data: null,
        }
    }
}

export const getMedia = async (
    userId: string
): Promise<APIResponse<MediaEntity[] | null>> => {
    try {
        const mediaTitle = await serverFetch(`/persona/${userId}/media/`)
        return await mediaTitle.json()
    } catch (err) {
        console.log(err)
        return {
            error: 'Failed to fetch watch history',
            status: HTTPStatus.INTERNAL_SERVER_ERROR,
            data: null,
        }
    }
}
