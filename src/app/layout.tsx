import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import type { CSSProperties } from 'react'
import { sourcecodePro, afacad } from './fonts'

export const metadata: Metadata = {
    title: 'Homeflix',
    description: 'Home Media Streamer',
}

const htmlStyle: CSSProperties = {
    scrollBehavior: 'smooth',
    width: '100%',
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="light" style={htmlStyle}>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body
                className={`${sourcecodePro.variable} ${afacad.variable} antialiased grow flex flex-col min-h-screen bg-background max-w-[4000px]`}
                suppressHydrationWarning={true}
                style={{ margin: '0 auto' }}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
