'use client'

import { UserSessionStoreProvider } from '@/providers/user-session-provider'
import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'
import { IconContext } from '@phosphor-icons/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <ToastProvider placement="top-center" />
            <IconContext
                value={{
                    color: '#3a3730', // Warm dark brown for icons
                    size: 32,
                    weight: 'bold',
                    mirrored: false,
                }}
            >
                <UserSessionStoreProvider>
                    <main
                        className="flex flex-col grow bg-background"
                        style={{ backgroundColor: 'var(--background)' }}
                    >
                        {children}
                    </main>
                </UserSessionStoreProvider>
            </IconContext>
        </HeroUIProvider>
    )
}
