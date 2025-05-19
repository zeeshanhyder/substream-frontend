import { serverFetch } from '@/server-api/util'

const getHeaders = (request: Request) => {
    const headers: Record<string, string> = {}
    const type = request.headers.get('Sec-Fetch-Dest')
    if (type === 'document') {
        return undefined
    }
    request.headers.forEach((value, key) => {
        headers[key] = value
    })
    return {
        headers,
    }
}
export async function GET(
    _request: Request,
    { params }: { params: { userId: string; mediaId: string } }
) {
    const { userId, mediaId } = await params
    const res = serverFetch(
        `/propel/stream/${userId}/${mediaId}`,
        getHeaders(_request)
    )
    return res
}
