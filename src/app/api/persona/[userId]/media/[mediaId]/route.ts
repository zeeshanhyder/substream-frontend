import { MediaEntity } from '@/client-api/types/media-entity'
import { APIResponse } from '@/client-api/types/service-response'
import { getMediaById } from '@/server-api/get-media-by-id'
import { getMediaWatchHistory } from '@/server-api/get-media-watch-history'

type GetMediaByMediaIdProps = {
    params: Promise<{
        userId: string
        mediaId: string
    }>
}
export async function GET(
    _request: Request,
    { params }: GetMediaByMediaIdProps
): Promise<APIResponse<MediaEntity | null>> {
    const { userId, mediaId } = await params
    const res = await getMediaById(userId, mediaId)
    const watchStats = await getMediaWatchHistory({ mediaId })
    if (watchStats.data && res.data?.metadata) {
        res.data.metadata.watchStats = {
            progress: watchStats.data.progress,
            lastWatchedAt: watchStats.data.watchedAt,
        }
    }
    return Response.json(res)
}
