import { getWatchHistory } from '@/server-api/get-watch-history'

export async function GET(
    _request: Request,
    { params }: { params: { userId: string } }
) {
    const { userId } = params
    const res = await getWatchHistory(userId)
    return Response.json(res)
}
