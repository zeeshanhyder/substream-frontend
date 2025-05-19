import type { NextConfig } from 'next'
import os from 'os'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL('https://image.tmdb.org/**')],
    },
    serverRuntimeConfig: {
        homePath: os.homedir(),
    },
}

export default nextConfig
