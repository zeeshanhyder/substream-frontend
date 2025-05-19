import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { serverStore } from '@/server/store/store'
import { getSeed } from './get-seed'

export type UserSessionPayload = {
    userId: string
    expiresAt: Date
}

const secretKey = getSeed()
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: UserSessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify<UserSessionPayload>(
            session,
            encodedKey,
            {
                algorithms: ['HS256'],
            }
        )
        return payload
    } catch (error) {
        console.log('Failed to verify session')
    }
}

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt })
    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
    serverStore.set(session, userId)

    return session
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}

export const isAuthedSession = async (session: string | undefined) => {
    if (!session) return false
    const payload = await decrypt(session)
    if (!payload || !payload.userId) return false
    const currentDate = new Date()
    if (currentDate > payload.expiresAt) return false

    serverStore.set(session, payload.userId)
    return true
}

export const getCurrentUserId = async () => {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value
    if (!session) return ''
    const payload = await decrypt(session)
    if (!payload || !payload.userId) return ''
    return payload.userId
}
