declare module global {
    type Hls = any
    interface Window {
        player: {
            mute: () => void
            unmute: () => void
            isMuted: () => boolean
        }
    }
}
