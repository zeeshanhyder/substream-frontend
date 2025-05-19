import { PersonaUser } from '@/client-api/persona'
import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage } from 'zustand/middleware'

export type UserStoreActions = {
    setUserId: (id: string) => void
    setUserFullName: (fullName: string) => void
    setEmailAddress: (emailAddress: string) => void
    setAvatarUrl: (avatarUrl: string) => void
    setMediaPathList: (mediaPathList: string[]) => void
    setHomeDirectory: (homeDirectory: string) => void
}

export type UserSessionState = PersonaUser

export type UserSessionStore = UserSessionState & UserStoreActions

export const defaultUserSessionState: UserSessionState = {
    id: '',
    emailAddress: '',
    fullName: '',
    avatarUrl: '',
    mediaPathList: [],
    homeDirectory: '',
}

export const createUserSessionStore = (
    initState: UserSessionState = defaultUserSessionState
) => {
    const createUserSessionStore = createStore<UserSessionStore>()
    return createUserSessionStore(
        persist(
            (set) => ({
                ...initState,
                setUserId: (id: string) => set(() => ({ id })),
                setUserFullName: (fullName: string) =>
                    set(() => ({ fullName })),
                setEmailAddress: (emailAddress: string) =>
                    set(() => ({ emailAddress })),
                setAvatarUrl: (avatarUrl: string) => set(() => ({ avatarUrl })),
                setMediaPathList: (mediaPathList: string[]) =>
                    set(() => ({ mediaPathList })),
                setHomeDirectory: (homeDirectory: string) =>
                    set(() => ({ homeDirectory })),
            }),
            {
                name: 'user-session-store',
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
}
