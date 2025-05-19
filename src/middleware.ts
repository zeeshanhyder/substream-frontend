import { NextRequest, NextResponse } from 'next/server'
import { isAuthedSession } from './lib/session'

const excludedPaths = ['/profiles', '/_next', '/add-profile']

const isExcludedPath = (path: string) => {
    return excludedPaths.some((excludedPath) => path.startsWith(excludedPath))
}

const redirectTo = (request: NextRequest, route: string) => {
    return NextResponse.redirect(new URL(route, request.url))
}
export async function middleware(request: NextRequest) {
    if (isExcludedPath(request.nextUrl.pathname)) {
        return NextResponse.next()
    }
    const session = request.cookies.get('session')?.value
    const isValidSession = await isAuthedSession(session)

    if (!session || !isValidSession) return redirectTo(request, '/profiles')
    const redirectToProfiles = (request: NextRequest) =>
        redirectTo(request, '/library')

    if (request.nextUrl.pathname === '/') {
        return redirectToProfiles(request)
    }

    return NextResponse.next()
}
