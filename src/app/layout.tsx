import './globals.css'
import type { Metadata } from 'next'
import { Afacad_Flux, Poppins } from 'next/font/google'
import { Providers } from './providers'
import type { CSSProperties } from 'react'

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

const afacad = Afacad_Flux({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

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
        <html lang="en" className="dark" style={htmlStyle}>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body
                className={`${poppins.variable} ${afacad.variable} antialiased flex-grow flex flex-col min-h-screen`}
                suppressHydrationWarning={true}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
