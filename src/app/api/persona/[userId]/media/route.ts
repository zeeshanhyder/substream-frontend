import { MediaEntity } from '@/client-api/types/media-entity'
import { APIResponse } from '@/client-api/types/service-response'
import { getUserMedia } from '@/server-api/get-user-media'

type GetMediaByUserIdProps = {
    params: Promise<{
        userId: string
    }>
}
export async function GET(
    _request: Request,
    { params }: GetMediaByUserIdProps
): Promise<APIResponse<MediaEntity[] | null>> {
    const { userId } = await params
    const res = await getUserMedia(userId)
    return Response.json(res)
}
