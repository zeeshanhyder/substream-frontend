import { getMediaWatchHistory } from '@/server-api/get-media-watch-history'

export async function GET(
    _request: Request,
    { params }: { params: { userId: string; mediaId: string } }
) {
    const { mediaId } = params
    const res = await getMediaWatchHistory({ mediaId })
    return Response.json(res)
}
