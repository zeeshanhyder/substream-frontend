'use client'

import { NextUIProvider } from '@nextui-org/react'
import { IconContext } from '@phosphor-icons/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <IconContext
                value={{
                    color: '#e5e7eb',
                    size: 32,
                    weight: 'bold',
                    mirrored: false,
                }}
            >
                <main className="flex flex-col grow dark text-foreground bg-background">
                    {children}
                </main>
            </IconContext>
        </NextUIProvider>
    )
}
