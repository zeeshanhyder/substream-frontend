declare global {
    interface Window {
        player: {
            mute: () => void
            unMute: () => void
            isMuted: () => boolean
        }
    }
}
window.player = window.player || {}
export {}
