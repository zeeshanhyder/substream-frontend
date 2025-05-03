'use client'

import { type ReactNode, createContext, useContext, useRef } from 'react'
import {
    defaultUserSessionState,
    createUserSessionStore,
    UserSessionStore,
} from '@/stores/user-session-store'
import { useStore } from 'zustand'

export type UserSessionStoreApi = ReturnType<typeof createUserSessionStore>
export const UserSessionContext = createContext<
    UserSessionStoreApi | undefined
>(undefined)

export interface UserSessionStoreProviderProps {
    children: ReactNode
}

export const UserSessionStoreProvider = ({
    children,
}: UserSessionStoreProviderProps) => {
    const store = useRef<UserSessionStoreApi | null>(null)
    if (!store.current) {
        store.current = createUserSessionStore(defaultUserSessionState)
    }
    return (
        <UserSessionContext.Provider value={store.current}>
            {children}
        </UserSessionContext.Provider>
    )
}

export const useUserSessionStore = <T,>(
    selector: (store: UserSessionStore) => T
): T => {
    const userSessionStoreContext = useContext(UserSessionContext)
    if (!userSessionStoreContext) {
        throw new Error(
            'useUserSessionStore must be used within UserSessionStoreProvider'
        )
    }
    return useStore(userSessionStoreContext, selector)
}
