'use server'
import 'server-only'

import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function createNewSession(
    userId: string,
    redirectOverride?: string
) {
    await createSession(userId)
    redirect(redirectOverride ?? '/library')
}
